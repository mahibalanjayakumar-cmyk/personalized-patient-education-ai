// Initialize Lucide Icons
lucide.createIcons();

document.addEventListener('DOMContentLoaded', () => {
    // Navigation Links
    const navGenerator = document.getElementById('nav-generator');
    const navHistory = document.getElementById('nav-history');
    const navSettings = document.getElementById('nav-settings');

    // Views
    const viewGenerator = document.getElementById('view-generator');
    const viewLoading = document.getElementById('view-loading');
    const viewResult = document.getElementById('view-result');

    // Form
    const intakeForm = document.getElementById('intake-form');
    
    // Result Container
    const materialContent = document.getElementById('material-content');
    const backBtn = document.getElementById('back-btn');

    // View Switcher Utility
    function switchView(targetView) {
        // Hide all views
        [viewGenerator, viewLoading, viewResult].forEach(view => {
            view.classList.remove('active-view');
            view.classList.add('hidden-view');
        });

        // Show target view
        targetView.classList.remove('hidden-view');
        targetView.classList.add('active-view');
    }

    // Handle Form Submission
    intakeForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Gather Inputs
        const diagnosis = document.getElementById('diagnosis').value;
        const literacy = document.getElementById('literacy').value;
        const culture = document.getElementById('culture').value;
        const learning = document.getElementById('learning').value;

        if (!diagnosis || !literacy || !culture || !learning) return;

        // Switch to Loading View
        switchView(viewLoading);

        try {
            // Call AI Mock Service
            const resultData = await AIMockService.generateMaterial({
                diagnosis,
                literacy,
                culture,
                learning
            });

            // Render Output
            renderMaterial(resultData, literacy, learning);

            // Switch to Result View
            switchView(viewResult);

        } catch (error) {
            console.error(error);
            alert("An error occurred while generating the material.");
            switchView(viewGenerator); // Revert on error
        }
    });

    // Handle Back Button
    backBtn.addEventListener('click', () => {
        switchView(viewGenerator);
    });

    // Render Logic
    function renderMaterial(data, literacy, learning) {
        // Clear previous content and apply dynamic classes for specific styling
        materialContent.innerHTML = '';
        materialContent.className = 'material-container'; 
        
        if(literacy === 'Basic') materialContent.classList.add('literacy-basic');
        if(learning === 'Visual') materialContent.classList.add('learning-visual');

        // Build Header
        const headerDiv = document.createElement('div');
        headerDiv.className = 'material-header';
        headerDiv.innerHTML = `
            <h1>${data.title}</h1>
            <div class="patient-meta">
                <span>${data.meta}</span>
            </div>
        `;
        materialContent.appendChild(headerDiv);

        // Build Sections
        data.sections.forEach(section => {
            const sectionDiv = document.createElement('div');
            sectionDiv.className = 'material-section';
            
            sectionDiv.innerHTML = `
                <h2><i data-lucide="${section.icon}"></i> ${section.title}</h2>
                ${section.content}
            `;
            
            materialContent.appendChild(sectionDiv);
        });

        // Re-initialize icons for newly added HTML
        lucide.createIcons();
    }
});
