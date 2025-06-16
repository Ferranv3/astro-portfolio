import { describe, it, expect, beforeEach } from 'vitest';

describe('ProjectsIsland toggle', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="extra-projects" class="hidden"></div>
      <button id="toggleButton">See more</button>
    `;

    document.getElementById('toggleButton')!.addEventListener('click', () => {
      const extraProjects = document.getElementById('extra-projects')!;
      const button = document.getElementById('toggleButton')!;
      if (extraProjects.classList.contains('hidden')) {
        extraProjects.classList.remove('hidden');
        button.classList.add('hidden');
      } else {
        extraProjects.classList.add('hidden');
        button.textContent = 'See more';
      }
    });
  });

  it('shows and hides extra projects', () => {
    const button = document.getElementById('toggleButton')!;
    const extraProjects = document.getElementById('extra-projects')!;

    button.click();
    expect(extraProjects.classList.contains('hidden')).toBe(false);
    expect(button.classList.contains('hidden')).toBe(true);

    button.click();
    expect(extraProjects.classList.contains('hidden')).toBe(true);
  });
});
