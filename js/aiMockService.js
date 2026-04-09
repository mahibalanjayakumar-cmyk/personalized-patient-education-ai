/**
 * Simulated AI Service to generate Patient Education Material based on inputs.
 */
class AIMockService {
    /**
     * Simulates an API call to an LLM like Gemini/OpenAI
     * @param {Object} params - The intake parameters
     * @returns {Promise<Object>} The generated material
     */
    static async generateMaterial({ diagnosis, literacy, culture, learning }) {
        // Simulate network delay (e.g., waiting for AI generation)
        await new Promise(resolve => setTimeout(resolve, 3000));

        // Logic to shape the response based on the literacy level and learning preference
        const isBasic = literacy === 'Basic';
        const isVisual = learning === 'Visual';

        const material = {
            title: `Your Guide to Managing ${diagnosis}`,
            meta: `Personalized for: ${culture !== 'General' ? culture + ' Dietary Needs | ' : ''}${literacy} Literacy | ${learning} Preference`,
            sections: []
        };

        // 1. What is it? (Condition Explanation)
        let explanationHTML = '';
        if (isBasic) {
            explanationHTML = `
                <p><strong>${diagnosis}</strong> means your body has a hard time keeping things balanced. Think of it like a car engine that needs the right mix of fuel and air. Right now, your engine needs a little help.</p>
                ${isVisual ? '<div style="background:#E2E8F0; padding:20px; border-radius:8px; text-align:center; margin:10px 0;"><i data-lucide="activity" style="width:48px;height:48px;color:#0E7490;"></i></div>' : ''}
            `;
        } else {
            explanationHTML = `
                <p><strong>${diagnosis}</strong> is a chronic condition that affects how your body processes key biological functions. It involves a continuous state where standard physiological regulation requires medical and lifestyle intervention to prevent long-term complications.</p>
            `;
        }

        material.sections.push({
            icon: 'heart-pulse',
            title: `Understanding ${diagnosis}`,
            content: explanationHTML
        });

        // 2. Cultural Recommendations (Diet/Lifestyle)
        let lifestyleHTML = '';
        if (culture === 'South Asian') {
            lifestyleHTML = `
                <p>We know traditional diets are important. You can still enjoy your meals with some modifications:</p>
                <ul>
                    <li>Use whole grain flour (Atta) instead of refined flour.</li>
                    <li>Limit added ghee in daily cooking; use healthier oils like olive or canola.</li>
                    <li>Incorporate more Daal and lentils, but be mindful of portion sizes with rice.</li>
                </ul>
            `;
        } else if (culture === 'Hispanic/Latino') {
            lifestyleHTML = `
                <p>Traditional foods can definitely fit into your health plan:</p>
                <ul>
                    <li>Opt for whole beans instead of refried beans cooked with lard.</li>
                    <li>Use corn tortillas instead of flour tortillas to increase fiber.</li>
                    <li>Bake or grill your meats rather than frying.</li>
                </ul>
            `;
        } else {
            lifestyleHTML = `
                <p>General healthy eating guidelines for you:</p>
                <ul>
                    <li>Fill half your plate with vegetables.</li>
                    <li>Choose lean proteins like chicken or fish.</li>
                    <li>Drink plenty of water throughout the day.</li>
                </ul>
            `;
        }

        // Simplify terms if basic
        if (isBasic) {
            lifestyleHTML = lifestyleHTML.replace(/physiological/g, 'body').replace(/modifications/g, 'changes');
        }

        material.sections.push({
            icon: 'utensils',
            title: 'Dietary & Lifestyle Plan',
            content: lifestyleHTML
        });


        // 3. Action Plan / Medication
        let actionHTML = '';
        if (learning === 'Actionable') {
            actionHTML = `
                <p>Here is your daily checklist:</p>
                <ul>
                    <li><strong>Morning:</strong> Take your prescribed medication with breakfast.</li>
                    <li><strong>Afternoon:</strong> 15-minute brisk walk.</li>
                    <li><strong>Evening:</strong> Check your numbers and log them in your journal.</li>
                </ul>
            `;
        } else {
            actionHTML = `
                <p>It is crucial to stay consistent with your routine. Taking your medications exactly as prescribed by Dr. Smith prevents sudden spikes or drops in your condition. Always consult before stopping any medication.</p>
                <div class="alert-box">
                    <strong>Important:</strong> If you feel dizzy or unusually fatigued, rest immediately and contact the clinic.
                </div>
            `;
        }

        material.sections.push({
            icon: 'clipboard-list',
            title: 'Your Daily Action Plan',
            content: actionHTML
        });

        return material;
    }
}
