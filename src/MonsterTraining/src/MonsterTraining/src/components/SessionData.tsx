export interface Session { Name: string; Description: string; Length: number; Selected: boolean }
export interface SessionListState { Sessions: Session[], SelectedSessions: Session[] }
export interface SelectedSessionProps { Name: string; Description: string; Length: number; key: string, selectItem: any }
export interface SelectedSessionsListProps { Sessions: Session[]}