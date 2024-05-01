interface Window {
  sidebar: {
    addPanel: (title: string, url: string, mark: string) => void
  }
  external: {
    AddFavorite: (url: string, title: string) => void
  }
}
