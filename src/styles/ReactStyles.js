import { style } from 'glamor';
//  className={ ifbuttonIsDisabled ? null : [buttonIsHovered ? 'hover' : null] }

const AppStyle = {
  width: '90vw',
  margin: '5vw',
  fontFamily: 'Arial',
}
const hrStyle = {
  paddingLeft: '5vw',
  paddingRight: '5vw',
}
const PrimaryButtonStyle = {
  HoverButton: style({
    padding: '5px',
    paddingLeft: '20px',
    paddingRight: '20px',
    borderRadius: '20px',
    color: 'white',
    backgroundColor: '#8b9dc3',
    fontSize: 'medium',
    transition: "all ease .5s",

    ":hover": {
      backgroundColor: "#3F7EC0",
      color: "ffffff"
    },
    ":disabled": {
      backgroundColor: '#F5F5F5',
    }
  }),

  DisabledButton: style({
      padding: '5px',
      paddingLeft: '20px',
      paddingRight: '20px',
      borderRadius: '20px',
      color: 'white',
      backgroundColor: '#F5F5F5',
      fontSize: 'medium',
      transition: "all ease .5s",

      ":hover": {
        backgroundColor: "#ffffff",
      },

      ":disabled": {
        backgroundColor: "#ffffff"
      }
  }),
}

const SecondaryButtonStyle = {
  HoverButton: style({
    fontSize: 'large',
    padding: '5px',
    paddingLeft: '20px',
    paddingRight: '20px',
    borderRadius: '20px',
    color: '#8D929B',
    backgroundColor: '#F5F5F5',
    transition: "all ease .5s",

    ":hover": {
      borderRadius: '20px 0px 0px 20px',
      backgroundColor: "#5E97D1",
      color: "#ffffff"
    }
  })
}
/**
  * ButtonStyle
  * Uses react's glamor module for inline CSS,
  * Allows for utilization of real stylesheets,
  * while staying inside the realms of JSX code
  *
**/

export {
  AppStyle,
  hrStyle,
  PrimaryButtonStyle,
  SecondaryButtonStyle,
}
