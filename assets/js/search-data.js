// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-",
    title: "",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "news-vb-cgcd-has-been-accepted-by-icml-2025-tada-tada",
          title: 'VB-CGCD has been accepted by ICML 2025! :tada::tada:',
          description: "",
          section: "News",},{id: "news-our-covla-was-selected-by-the-nvidia-academic-grant-program-sparkles-smile",
          title: 'Our “CoVLA” was selected by the NVIDIA Academic Grant Program! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-i-attended-the-mobiuk-edinburgh-and-icml-vancouver-tada-tada",
          title: 'I attended the MobiUK @ Edinburgh and ICML @ Vancouver! :tada::tada:',
          description: "",
          section: "News",},{id: "projects-edgeai",
          title: 'EdgeAI',
          description: "A cloud-edge-device collaborative edge intelligence approach.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-deeprl",
          title: 'DeepRL',
          description: "To achieve distributed and highly available reinforcement learning.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
