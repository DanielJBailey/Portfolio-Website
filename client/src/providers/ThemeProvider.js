import React from "react";
const ThemeContext = React.createContext();

export const ThemeConsumer = ThemeContext.Consumer;

class ThemeProvider extends React.Component {
  state = {
    darkTheme: false,
    colors: {
      dark: {
        background: "#424242",
        fontColor: "#fff"
      },
      light: {
        background: "#fff",
        fontColor: "#424242"
      }
    },
    change: () => this.changeTheme()
  };

  changeTheme = () => {
     this.setState(state => ({dark: !state.dark}));
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