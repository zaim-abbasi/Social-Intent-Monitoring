export class IntentAnalysisService {
  static calculatePurchaseIntent(interactions) {
    const intentSignals = {
      productResearch: ['review', 'compare', 'vs', 'recommendation', 'best'],
      priceInquiry: ['price', 'cost', 'discount', 'deal', 'worth'],
      buyingStage: ['buy', 'purchase', 'order', 'get', 'looking for'],
      featureInterest: ['feature', 'specification', 'capability', 'can it', 'does it']
    };

    let totalSignals = 0;
    let matchedSignals = 0;

    interactions.forEach(interaction => {
      const text = interaction.content.toLowerCase();
      
      Object.values(intentSignals).forEach(signals => {
        signals.forEach(signal => {
          totalSignals++;
          if (text.includes(signal)) {
            matchedSignals++;
          }
        });
      });
    });

    return (matchedSignals / totalSignals) * 100;
  }

  static calculateIntentAccuracy(predictions, actualOutcomes) {
    let correctPredictions = 0;

    predictions.forEach((prediction, index) => {
      if (prediction === actualOutcomes[index]) {
        correctPredictions++;
      }
    });

    return (correctPredictions / predictions.length) * 100;
  }

  static analyzeIntentPatterns(interactions) {
    const patterns = {
      productResearch: 0,
      priceComparison: 0,
      featureRequests: 0
    };

    interactions.forEach(interaction => {
      const text = interaction.content.toLowerCase();
      
      if (text.match(/review|compare|best|recommend/)) {
        patterns.productResearch++;
      }
      if (text.match(/price|cost|cheaper|expensive|worth/)) {
        patterns.priceComparison++;
      }
      if (text.match(/feature|add|improve|should have|need/)) {
        patterns.featureRequests++;
      }
    });

    const total = Object.values(patterns).reduce((a, b) => a + b, 0);
    
    return {
      productResearch: (patterns.productResearch / total) * 100,
      priceComparison: (patterns.priceComparison / total) * 100,
      featureRequests: (patterns.featureRequests / total) * 100
    };
  }

  static calculateBuyerPersonaMatch(interactions, buyerPersonas) {
    let totalMatches = 0;

    interactions.forEach(interaction => {
      buyerPersonas.forEach(persona => {
        const matchScore = this.calculatePersonaMatchScore(interaction, persona);
        totalMatches += matchScore;
      });
    });

    return (totalMatches / (interactions.length * buyerPersonas.length)) * 100;
  }

  static calculatePersonaMatchScore(interaction, persona) {
    let score = 0;
    const text = interaction.content.toLowerCase();

    // Match interests
    persona.interests.forEach(interest => {
      if (text.includes(interest.toLowerCase())) {
        score += 0.3;
      }
    });

    // Match pain points
    persona.painPoints.forEach(painPoint => {
      if (text.includes(painPoint.toLowerCase())) {
        score += 0.4;
      }
    });

    // Match goals
    persona.goals.forEach(goal => {
      if (text.includes(goal.toLowerCase())) {
        score += 0.3;
      }
    });

    return Math.min(score, 1);
  }
}