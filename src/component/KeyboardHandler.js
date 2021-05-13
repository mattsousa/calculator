import React from "react";
import Keymap from '../logic/keymap'
export default class KeyboardHandler extends React.Component {
    render() {
      return (
        <>
            {
                document.onkeypress = event => {
                    let keyList = Keymap;
                    let keyPressed = event.key;
                    let found = false;

                    keyList.forEach(function(value, index, arr){
                        if(keyPressed.indexOf(value) === 0){
                            found = true;
                        }
                    });

                    if(found){
                        let button = document.getElementById(keyPressed);
                        button.click();
                    }
                }
            }
        </>
      );
    }
  }
  