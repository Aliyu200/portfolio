document.addEventListener('DOMContentLoaded', () => {
    const systemAnchors = document.querySelectorAll('.nav-anchor');
    const displayViews = document.querySelectorAll('.canvas-view');

    // Central Navigation Handler Routine
    function updateActiveView(targetViewId) {
        // Step 1: Manage active styles across header navigation anchors
        systemAnchors.forEach(anchor => {
            if (anchor.getAttribute('data-view') === targetViewId) {
                anchor.classList.add('active');
            } else {
                anchor.classList.remove('active');
            }
        });

        // Step 2: Toggle conditional CSS display blocks for content blocks
        displayViews.forEach(view => {
            if (view.id === targetViewId) {
                view.classList.add('active-view');
                // Instantaneous repositioning upward to peak coordinate
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                view.classList.remove('active-view');
            }
        });
    }

    // Connect trigger click actions directly to anchors
    systemAnchors.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const requestedView = btn.getAttribute('data-view');
            updateActiveView(requestedView);
        });
    });

    // Mount to absolute context window space safely for cross-component triggers
    window.updateActiveView = updateActiveView;
});
