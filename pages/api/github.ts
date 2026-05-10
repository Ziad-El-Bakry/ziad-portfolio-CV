import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const response = await fetch('https://api.github.com/users/Ziad-El-Bakry/repos?sort=updated&per_page=12');
    
    if (!response.ok) {
      throw new Error(`GitHub API responded with ${response.status}`);
    }
    
    const data = await response.json();
    
    const excludedProjects = ['kscarf final'];

    // Format the response to match the Project type on the frontend
    const projects = data
      .filter((repo: any) => !repo.fork) // Optionally filter out forks
      .filter((repo: any) => !excludedProjects.includes(repo.name.toLowerCase()))
      .map((repo: any) => ({
        title: repo.name.replace(/-/g, ' '),
        desc: repo.description || 'A project by Ziad El Bakry.',
        link: repo.html_url,
        tags: repo.language ? [repo.language, ...(repo.topics || [])].slice(0, 3) : (repo.topics || []).slice(0, 3),
      }));

    res.status(200).json(projects);
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
}
