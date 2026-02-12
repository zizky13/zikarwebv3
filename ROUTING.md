# Project Routing Setup

## How It Works

### Routes
- `/` - Home page (App.tsx) with all sections
- `/project/:projectId` - Individual project detail pages

### Project IDs
Each project has a unique ID that maps to detailed content:
- `coursa` - Coursa running app
- `cococo` - Coco.co cross-platform app
- `navxbeauty` - NavXBeauty navigation app
- `binsight` - Binsight waste management app
- `eatsway` - Eatsway food delivery app

### Navigation Flow
1. **Home Page**: Click on any `ProjectCard` → navigates to `/project/{projectId}`
2. **Project Page**: Click navbar items → navigates back to home and scrolls to section
3. **Project Page**: "Back to All Projects" button → navigates to home

### Adding New Projects

1. **Add project to `src/data/projects.ts`**:
   ```typescript
   export const projects = [
     {
       id: "my-project",  // Must be unique
       title: "My Project",
       highlight: "Tagline here",
       description: "Short description",
       imageUrl: "path/to/image.svg"
     }
   ];
   ```

2. **Add detailed content**:
   ```typescript
   export const projectDetails = {
     "my-project": {
       projectTitle: "My Project",
       projectTagline: "Tagline",
       gettingStarted: { ... },
       context: { ... },
       challenge: { ... },
       solutions: { ... },
       contribution: { ... },
       learnings: { ... }
     }
   };
   ```

3. **That's it!** The routing is already set up to handle the new project automatically.

### Files Modified
- `src/main.tsx` - Added BrowserRouter and Routes
- `src/App.tsx` - Imported projects data and added navigate function
- `src/components/Navbar.tsx` - Added navigation support for project pages
- `src/data/projects.ts` - Centralized project data
- `src/pages/ProjectDetail.tsx` - Reusable detail page template
- `src/pages/ProjectPage.tsx` - Wrapper that loads project data
