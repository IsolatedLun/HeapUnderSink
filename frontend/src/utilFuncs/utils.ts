export function toggleElement(id: string) {
    const el = document.getElementById('side-nav') as HTMLElement;
  
    if(el.getAttribute('data-state') === 'off') 
      el.setAttribute('data-state', 'on')
  
    else
      el.setAttribute('data-state', 'off')
  }