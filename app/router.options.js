export default {
    scrollBehavior(to, _) {
      const { hash, name } = to;
      
      nextTick(() => {
        if (hash) {
            const element = document.getElementById(hash.replace(/#/, ""));
            if (element && element.scrollIntoView) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "start",
                });
            }
        } else {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: name === 'index' ? 'smooth' :'auto',
            });
            
        }
        return {};
      })
      
    },
  }