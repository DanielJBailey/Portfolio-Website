import React from "react";
const ThemeContext = React.createContext();

export const ThemeConsumer = ThemeContext.Consumer;

class ThemeProvider extends React.Component {
  state = {
    darkTheme: false,
    colors: {
      dark: {
        background: "#303030",
        fontColor: "#fafafa",
      },
      light: {
        background: "#fafafa",
        fontColor: "#303030",
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