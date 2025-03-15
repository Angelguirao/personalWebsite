
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ListView from '@/components/garden/ListView';
import GraphView from '@/components/garden/GraphView';
import ViewModeSelector, { HierarchicalPerspective } from '@/components/garden/ViewModeSelector';
import { QuestionsView } from '@/components/garden/questions/QuestionsView';
import HierarchyView from '@/components/garden/HierarchyView';
import { DataModelAdapter } from '@/lib/garden/adapters';
import ModelManagement from '@/components/garden/ModelManagement';
import { Button } from '@/components/ui/button';
import ModelFormDialog from '@/components/garden/ModelFormDialog';
import { Database } from 'lucide-react';
import GardenHeader from '@/components/garden/GardenHeader';
import GardenSearch from '@/components/garden/GardenSearch';
import EmptyGarden from '@/components/garden/EmptyGarden';
import { useGardenData } from '@/hooks/useGardenData';
import { createQuestion, getQuestions } from '@/lib/garden/api';
import { Question } from '@/lib/garden/types';
import { toast } from 'sonner';

// Views available in the garden
type ViewMode = 'list' | 'graph' | 'table' | 'qa' | 'flowchart' | 'hierarchy';

const Garden = () => {
  // State for hierarchical perspective and view mode
  const [activePerspective, setActivePerspective] = useState<HierarchicalPerspective>('mentalModels');
  const [activeView, setActiveView] = useState<ViewMode>('hierarchy');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  
  const {
    models,
    connections,
    isLoading,
    selectedModel,
    isAuthenticated,
    fetchData,
    checkDatabase,
    handleModelSelect,
  } = useGardenData();

  // Fetch questions
  const fetchQuestions = async () => {
    try {
      const questionsData = await getQuestions();
      console.log('Questions fetched:', questionsData);
      setQuestions(questionsData);
    } catch (error) {
      console.error('Error fetching questions:', error);
      toast.error('Failed to load questions');
    }
  };

  // Handle creating a new question
  const handleCreateQuestion = async (questionData: Omit<Question, 'id'>) => {
    try {
      const newQuestion = await createQuestion(questionData);
      setQuestions(prev => [...prev, newQuestion]);
      toast.success('Question created successfully');
    } catch (error) {
      console.error('Error creating question:', error);
      toast.error('Failed to create question');
      throw error;
    }
  };

  // Handle perspective change
  const handlePerspectiveChange = (perspective: HierarchicalPerspective) => {
    setActivePerspective(perspective);
    
    // Set appropriate default view for each perspective
    if (perspective === 'questions') {
      // Questions perspective only has one view
      setActiveView('qa');
    } else if (perspective === 'mentalModels' && activeView === 'qa') {
      // If switching to mental models from questions, set default view
      setActiveView('hierarchy');
    }
  };

  // Convert to garden notes for legacy components
  const gardenNotes = DataModelAdapter.modelsToNotes(models);

  // Filter models based on search query
  const filteredModels = searchQuery.trim() === '' 
    ? models 
    : models.filter(model => 
        model.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (model.subtitle && model.subtitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
        model.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (model.tags && model.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
      );

  // Fetch questions when component mounts or auth status changes
  useEffect(() => {
    fetchQuestions();
  }, [isAuthenticated]);

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-16">
        <div className="container-narrow">
          <GardenHeader />
          
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <ViewModeSelector 
                activePerspective={activePerspective}
                activeView={activeView} 
                onPerspectiveChange={handlePerspectiveChange}
                onViewChange={setActiveView} 
              />
              
              <div className="flex space-x-2">
                <GardenSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
              </div>
            </div>
            
            {/* Only show model management when in Mental Models perspective */}
            {activePerspective === 'mentalModels' && (
              <div className="flex justify-between items-center">
                <ModelManagement onRefresh={fetchData} />
                {isAuthenticated && (
                  <Button variant="outline" size="sm" onClick={checkDatabase} className="flex items-center gap-2">
                    <Database size={16} />
                    <span>Check Database</span>
                  </Button>
                )}
              </div>
            )}
            
            {isLoading ? (
              <div className="h-64 flex items-center justify-center">
                <div className="animate-spin h-8 w-8 border-t-2 border-primary rounded-full"></div>
              </div>
            ) : (
              <>
                {/* Questions Perspective */}
                {activePerspective === 'questions' && (
                  <QuestionsView 
                    questions={questions} 
                    models={models.map(m => ({ id: m.id, title: m.title }))}
                    onCreateQuestion={handleCreateQuestion}
                  />
                )}

                {/* Mental Models Perspective */}
                {activePerspective === 'mentalModels' && models.length === 0 ? (
                  <EmptyGarden 
                    onCreateModel={() => setIsCreateDialogOpen(true)} 
                    isAuthenticated={isAuthenticated}
                  />
                ) : activePerspective === 'mentalModels' && (
                  <>
                    {activeView === 'hierarchy' && (
                      <HierarchyView 
                        models={filteredModels}
                        questions={questions}
                        onSelectModel={handleModelSelect}
                      />
                    )}

                    {activeView === 'list' && (
                      <ListView 
                        notes={filteredModels} 
                        onSelectModel={handleModelSelect}
                        selectedModelId={selectedModel?.id}
                        onRefresh={fetchData}
                      />
                    )}
                    
                    {activeView === 'graph' && connections.length > 0 && gardenNotes.length > 0 ? (
                      <div className="h-[600px] rounded-xl border shadow-sm overflow-hidden">
                        <GraphView 
                          nodes={gardenNotes}
                          connections={connections} 
                          models={models}
                        />
                      </div>
                    ) : activeView === 'graph' && (
                      <div className="h-[600px] rounded-xl border shadow-sm overflow-hidden flex items-center justify-center">
                        <div className="text-center p-6 max-w-md">
                          <h3 className="text-lg font-medium mb-2">No Graph Data Available</h3>
                          <p className="text-muted-foreground">
                            {connections.length === 0 ? 
                              "There are no connections between notes to display in the graph." : 
                              "There was a problem with the graph data."}
                          </p>
                          <Button onClick={fetchData} className="mt-4">
                            Refresh Data
                          </Button>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
      
      <ModelFormDialog
        isOpen={isCreateDialogOpen}
        onOpenChange={setIsCreateDialogOpen}
        onSuccess={fetchData}
      />
    </>
  );
};

export default Garden;
