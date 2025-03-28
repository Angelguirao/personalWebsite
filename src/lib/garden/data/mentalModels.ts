
import { 
  MentalModel, 
  GardenNote, 
  convertMentalModelToNote 
} from '../types';

// Enhanced mental models using the new structure - representing fundamental units of knowledge
export const mentalModels: MentalModel[] = [
  {
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    title: "Transformative Existence",
    subtitle: "Human existence as part of nature rather than separate from it",
    developmentStage: "seedling",
    confidenceLevel: "hypothesis",
    summary: "Our relationship with nature isn't necessarily antagonistic. We can transform how we perceive ourselves in relation to nature – as part of it rather than separate from it.",
    fullContent: "Humans have long positioned themselves outside and above nature, treating the environment as a resource to exploit. This mental model proposes that a fundamental reorientation is needed where we recognize ourselves as integral to the natural world. Our choices, technologies, and values should reflect this embeddedness, seeking harmony rather than domination. Practical implications include regenerative design principles, circular economies, and biophilic communities that embed natural processes within human systems.",
    tags: ["ethics", "environment", "ecology", "anthropocene"],
    timestamps: {
      created: "2024-09-01",
      modified: "2024-09-01"
    },
    latchAttributes: {
      category: "Environmental Ethics",
      hierarchyLevel: 4
    },
    socraticAttributes: {
      clarification: "This model examines whether human existence is incompatible with environmental flourishing",
      assumptions: ["Humans and nature are separate", "Human existence necessarily harms nature"],
      implications: "If we see ourselves as part of nature rather than separate, we can transform our relationship with the environment"
    },
    visibility: "public",
    // Legacy compatibility
    stage: "seedling",
    lastUpdated: "2024-09-01"
  },
  {
    id: "c4c6e79b-0d04-4f53-b6f3-3382180cadc9",
    title: "Values Beyond Happiness",
    subtitle: "Justice and equality as primary social values",
    developmentStage: "seedling",
    confidenceLevel: "working",
    summary: "The pursuit of happiness as society's ultimate goal may lead to overlooking more fundamental values like justice and equality. A well-lived life might require more than just happiness.",
    fullContent: "Modern societies increasingly measure success through happiness metrics and personal satisfaction. This mental model proposes that focusing exclusively on happiness is insufficient for human flourishing. Values like justice, fairness, and equality may sometimes require sacrificing immediate happiness for longer-term societal wellbeing. Individuals experiencing appropriate negative emotions in response to injustice (like righteous anger or moral outrage) might be living better lives than those who maintain happiness through moral disengagement or willful ignorance.",
    tags: ["ethics", "values", "philosophy", "happiness"],
    timestamps: {
      created: "2024-09-01",
      modified: "2024-09-01"
    },
    latchAttributes: {
      category: "Ethics",
      hierarchyLevel: 3
    },
    dsrpStructure: {
      distinctions: "Distinguishes between happiness and flourishing",
      perspectives: ["Utilitarian", "Virtue ethics", "Justice-oriented"]
    },
    visibility: "public",
    // Legacy compatibility
    stage: "seedling",
    lastUpdated: "2024-09-01"
  },
  {
    id: "3a8a7e33-da91-4782-90ba-1834c9e982c4",
    title: "Knowledge as Solidarity",
    subtitle: "Epistemological pragmatism centered on human relations",
    developmentStage: "growing",
    confidenceLevel: "established",
    summary: "Knowledge isn't about capturing objective reality but creating frameworks that strengthen human solidarity and ethical relationships.",
    fullContent: "This model reframes epistemology entirely. Knowledge claims are justified not by correspondence to an external reality but by their ability to foster human solidarity and ethical relations. Truth becomes a property of statements made within communities of shared understanding, not an independent feature of reality. This pragmatic approach shifts focus from 'getting reality right' to 'making lives better,' treating inquiry as fundamentally ethical rather than representational. Scientific progress happens not because we're getting closer to reality's intrinsic nature, but because we're developing more useful ways of predicting and controlling our environment.",
    tags: ["epistemology", "pragmatism", "ethics", "philosophy"],
    timestamps: {
      created: "2024-08-31",
      modified: "2024-08-31"
    },
    latchAttributes: {
      category: "Epistemology",
      hierarchyLevel: 4
    },
    consequences: {
      personal: "Changes how we view our responsibility in knowledge creation",
      societal: "Moves from correspondence theory of truth to communal agreement"
    },
    visibility: "public",
    // Legacy compatibility
    stage: "growing",
    lastUpdated: "2024-08-31"
  },
  {
    id: "0556b3d5-64e2-4b70-8f47-8d3ba68f56c8",
    title: "Thoughtfulness as Political Action",
    subtitle: "Reflection as resistance to political thoughtlessness",
    developmentStage: "growing",
    confidenceLevel: "established",
    summary: "The capacity for deep reflection is a vital political action in an age where thoughtlessness enables political harm.",
    fullContent: "In modern political systems, thoughtlessness—not active malice—enables catastrophic policies and outcomes. This mental model proposes that cultivating the habit of reflection is itself a political act. When we pause to consider the full implications of our actions, policies, and systems, we resist the currents of thoughtless harm. Thoughtfulness requires stepping back from immediate reactions, considering multiple perspectives, and examining consequences across time and space. By making reflection a practice, individuals can develop resistance to propaganda, demagoguery, and the normalization of harmful policies.",
    tags: ["politics", "philosophy", "reflection", "ethics"],
    timestamps: {
      created: "2024-08-29",
      modified: "2024-08-29"
    },
    latchAttributes: {
      category: "Political Philosophy",
      hierarchyLevel: 3
    },
    socraticAttributes: {
      assumptions: ["Thinking can be separated from doing", "Thoughtlessness leads to harmful actions"],
      evidence: "Historical examples including totalitarian regimes",
      implications: "Thoughtfulness as a political and ethical responsibility"
    },
    visibility: "public",
    // Legacy compatibility
    stage: "growing",
    lastUpdated: "2024-08-29"
  },
  {
    id: "2b45c097-b31e-4c36-b324-3f8824601dbe",
    title: "Truth as Beautiful Mystery",
    subtitle: "Uncertainty as epistemological strength",
    developmentStage: "evergreen",
    confidenceLevel: "fundamental",
    summary: "Truth is not something to be definitively captured but a beautiful mystery to be continuously engaged with through sustained inquiry.",
    fullContent: "This fundamental mental model embraces the limitation that truth itself is shaped by the consciousness engaging with it, making complete certainty impossible. Rather than viewing this as a failure of knowledge, we might see beauty in uncertainty: it keeps inquiry alive, prevents dogmatism, and acknowledges the evolving nature of understanding. The best knowledge systems maintain a productive tension between confidence in established findings and openness to revision. Intellectual humility becomes not just an ethical virtue but an epistemological necessity. This perspective values questions as much as answers and sees the pursuit of knowledge as an aesthetic engagement with reality's mysteries.",
    tags: ["epistemology", "philosophy", "consciousness", "truth"],
    timestamps: {
      created: "2024-08-29",
      modified: "2024-08-29"
    },
    latchAttributes: {
      category: "Epistemology",
      hierarchyLevel: 5
    },
    dsrpStructure: {
      distinctions: "Distinguishes between certainty and truth",
      perspectives: ["Scientific realism", "Pragmatism", "Constructivism"]
    },
    visibility: "public",
    // Legacy compatibility
    stage: "evergreen",
    lastUpdated: "2024-08-29"
  }
];

// For backward compatibility - convert mental models to garden notes
export const gardenNotes: GardenNote[] = mentalModels.map(convertMentalModelToNote);
