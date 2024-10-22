// TypeScript loader function to set meta tags
export const rootLoader = async (): Promise<null> => {
    const path = window.location.pathname
    const href = window.location.href
    document.title = `On ${path}`;
  
    // Set the meta description
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute("content", "This is the dynamic description for the page.");
    } else {
      // If meta tag does not exist, create one
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = "This is the dynamic description for the page.";
      document.head.appendChild(newMeta);
    }
  
    return null;  // No data to pass to the component
  };
  