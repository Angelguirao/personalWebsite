
import { Question, QuestionCategory } from '../types';

// Sample questions related to mental models
export const questions: Question[] = [
  {
    id: "6d43bc47-67c5-4b4a-9d9a-082c6c95a75f", // Valid UUID format
    questionText: "What is the relationship between happiness and a good life?",
    clarificationNeeded: false,
    relatedModels: ["c4c6e79b-0d04-4f53-b6f3-3382180cadc9"], // Updated to match the new UUID
    category: "philosophical",
    importanceRank: 8
  },
  {
    id: "b9c2f317-fc7d-48b5-8264-5988a69c1a96", // Valid UUID format
    questionText: "How should humans relate to the natural world?",
    clarificationNeeded: false,
    relatedModels: ["f47ac10b-58cc-4372-a567-0e02b2c3d479"], // Updated to match the new UUID
    category: "ethical",
    importanceRank: 9
  },
  {
    id: "38f5b8e4-c760-4b32-90d0-cd83235c7b34", // Valid UUID format
    questionText: "Is objective truth possible or desirable?",
    clarificationNeeded: false,
    relatedModels: ["3a8a7e33-da91-4782-90ba-1834c9e982c4", "2b45c097-b31e-4c36-b324-3f8824601dbe"], // Updated to match the new UUIDs
    category: "philosophical",
    importanceRank: 7
  },
  {
    id: "7a8f19d7-4bc3-4d6a-9f12-6efd2d8cc721", // Valid UUID format
    questionText: "What is the relationship between thinking and action?",
    clarificationNeeded: false,
    relatedModels: ["0556b3d5-64e2-4b70-8f47-8d3ba68f56c8"], // Updated to match the new UUID
    category: "philosophical",
    importanceRank: 6
  }
];
