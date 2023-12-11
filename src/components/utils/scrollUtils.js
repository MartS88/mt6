const scrollToElement = () => {
    const element = document.getElementById('scrollTarget');
    element.scrollIntoView({
        behavior: 'smooth',
    });
};

export { scrollToElement };