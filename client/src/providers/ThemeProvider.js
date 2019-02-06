import React from "react";
const ThemeContext = React.createContext();

export const ThemeConsumer = ThemeContext.Consumer;

class ThemeProvider extends React.Component {
  state = {
    darkTheme: false,
    colors: {
      dark: {
        background: "#2f3640",
        fontColor: "#ced6e0",
        overlay: "rgba(47, 54, 64, 0.7)"
      },
      light: {
        background: "#fff",
        fontColor: "#2f3640",
        overlay: "rgba(250, 250, 250, 0.7)"
      }
    },
    change: () => this.changeTheme()
  };

  changeTheme = () => {
     this.setState(state => ({darkTheme: !state.darkTheme}));
  }
    
  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        { this.props.children }
      </ThemeContext.Provider>
    )
  }
}

export default ThemeProvider;