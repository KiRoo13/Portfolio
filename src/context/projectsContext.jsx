import { createContext, useContext, useReducer } from "react";
import { projectsList } from "../helpers/projectsList";

const ProjectsContext = createContext(null);

const ProjectsReduserContext = createContext(null);

export function ProjectsProvider({ children }) {

  const [projects, dispatch] = useReducer(reducerProjects, projectsList)

  return (
    <ProjectsContext value={projects}>
      <ProjectsReduserContext value={dispatch}>
        {children}
      </ProjectsReduserContext>
    </ProjectsContext>
  );
}

function reducerProjects(state, action) {
  switch (action.type) {
    case 'Test':
      console.log(state, action)
      return state
    default:
      break;
  }
}

export function useProjects () {
   return useContext(ProjectsContext)
}

export function useProjectsDispatch () {
   return useContext(ProjectsReduserContext)
}
