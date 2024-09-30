/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
import { StyleSheet, css } from 'aphrodite/no-important';
import {
  Modal,
  ModalBody,
} from "reactstrap";
import React, { PureComponent } from "react";



export default class CustomModal extends PureComponent {
      constructor(props) {
        super(props);
        this.state = {
          on1: false,
          on2: false,
          on3: false,
          on4: false,
          result:"",
        }
      }
      changeON1() {
        this.setState({ on1: !this.state.on1 })
      }
      changeON2() {
        this.setState({ on2: !this.state.on2 })
      }
    render(){
    const { toggle} = this.props;
    return (
      <Modal isOpen={true} toggle={toggle} contentClassName={css(styles.modal)}>
      <ModalBody className={css(styles.block_modal)}>
        <div
      alt-class={`untitled-page ${css(styles.block_login)}`}
      x="0px minmax(592px,592px) 0px"
      y="0px minmax(540px,540px) 0px">
      <div className={css(styles.block_login)}>

        <div className={css(styles.flex_login, styles.flex_layout_login)}>
        <h1 className={css(styles.hero_title_login, styles.hero_title_layout_login)}>{'Вход'}</h1>
        <img
          src = 'fc6f7d3dadc84f8540a5c7989ef582fc.png'
          className={css(styles.icon, styles.icon_layout_login)}
          onClick={() => toggle(this.toggle)}
        />
          <div className={css(styles.group_login, styles.group_layout_login)} />

          <div className={css(styles.cover_block1_login, styles.cover_block1_layout_login)}>
          <h3 className={css(styles.subtitle_box, styles.subtitle_box_layout)}>
              <input className={css(styles.subtitle)} type={'name'} placeholder={`Логин`} />
            </h3>
            
          </div>

          <div className={css(styles.cover_block1_login, styles.cover_block1_layout_login)}>
          <h3 className={css(styles.subtitle_box, styles.subtitle_box_layout)}>
              <input className={css(styles.subtitle)} type={'password'} placeholder={`Пароль`} />
            </h3>
          </div>

          <h5 className={css(styles.highlights_login, styles.highlights_layout_login)}>{'Забыли пароль?'}</h5>

          <div className={css(styles.cover_block_login, styles.cover_block_layout_login)}>
            <h1 className={css(styles.hero_title1_login, styles.hero_title1_layout_login)}>{'Войти'}</h1>
          </div>

          <h5 className={css(styles.highlights_login, styles.highlights_layout1_login)}>{'Регистрация'}</h5>
        </div>
      </div>
      </div>
      </ModalBody>
      </Modal>
    );
  }
}



const styles = StyleSheet.create({
  block_login: {
    display: 'flex',
    flexDirection: 'column',
  },
  hero_title_login: {
    font: '600 36px/1.2 "Raleway", Helvetica, Arial, serif',
    color: 'rgb(15,127,204)',
    letterSpacing: '0px'
  },
  hero_title_layout_login: {
    position: 'absolute',
    top: -30,
    height: 44,
    width: 319,
    right: "-14%"
  },
  icon: {
    cursor: "pointer"
  },
  modal: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(255,255,255)',
    boxShadow: '0px 12px 21px 7px rgba(0,0,0,0.24705882352941178)',
    border: '2px solid rgb(146,143,143)',
    borderRadius: '30px 30px 30px 30px',
  },
  icon_layout_login: {
    position: 'absolute',
    top:  -28,
    height: 40,
    width: 40,
    right: -15
  },
  flex_login: {
    display: 'flex',
    flexDirection: 'column'
  },
  flex_layout_login: {
    position: 'relative',
    height: 'min-content',
    margin: '19px 20px'
  },
  group_login: {
    display: 'flex',
    flexDirection: 'column'
  },
  group_layout_login: {
    position: 'relative',
    height: 'min-content',
    width: '100%',
    margin: '0px 0px'
  },
  cover_block1_login: {
    display: 'flex',
    flexDirection: 'column',
    border: '2px solid rgb(146,143,143)',
    borderRadius: '30px 30px 30px 30px'
  },
  cover_block1_layout_login: {
    position: 'relative',
    height: 'min-content',
    margin: '30px 26px 0px',
    paddingLeft:30
  },
  subtitle_login: {
    font: '600 20px/1.2 "Open Sans", Helvetica, Arial, serif',
    color: 'rgb(145,143,143)',
    letterSpacing: '0px'
  },
  subtitle_layout_login: {
    position: 'relative',
    height: 'min-content',
    width: "300px",
    margin: '17px 28px 19px'
  },
  cover_block1_layout1_login: {
    position: 'relative',
    height: 'min-content',
    margin: '25px 26px 0px'
  },
  cover_block1_login: {
    display: 'flex',
    flexDirection: 'column',
    border: '2px solid rgb(146,143,143)',
    borderRadius: '30px 30px 30px 30px'
  },
  subtitle_layout1_login: {
    position: 'relative',
    height: 'min-content',
    margin: '16px 28px 20px'
  },
  highlights_login: {
    display: 'flex',
    justifyContent: 'flex-end',
    font: '600 15px/1.2 "Open Sans", Helvetica, Arial, serif',
    color: 'rgb(15,127,204)',
    textAlign: 'right',
    letterSpacing: '0px',
    cursor: "pointer"
  },
  highlights_layout_login: {
    position: 'relative',
    height: 'min-content',
    width: '60.91%',
    margin: '20px auto 0px',
    right: "15%",
    
  },
  cover_block_login: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(253,106,7)',
    borderRadius: '30.5px 30.5px 30.5px 30.5px'
  },
  cover_block_layout_login: {
    position: 'relative',
    height: 'min-content',
    width: '45.29%',
    margin: '33px auto 0px',
    cursor: "pointer"
  },
  hero_title1_login: {
    display: 'flex',
    justifyContent: 'flex-end',
    font: '600 40px/1.2 "Raleway", Helvetica, Arial, serif',
    color: 'rgb(255,255,255)',
    textAlign: 'right',
    letterSpacing: '0px'
  },
  hero_title1_layout_login: {
    position: 'relative',
    height: 'min-content',
    width: 116,
    minWidth: 116,
    margin: '7px auto 6px'
  },
  highlights_layout1_login: {
    position: 'relative',
    height: 'min-content',
    width: 106,
    minWidth: 106,
    margin: '8px auto 3px'
  },
  subtitle: {
    position: 'relative',
    font: '600 20px/1.2 "Open Sans", Helvetica, Arial, serif',
    color: 'rgb(145,143,143)',
    letterSpacing: '0px',
    backgroundColor: 'transparent',
    padding: 0,
    border: 0,
    width: '100%',

    ':focus': {
      outline: 'none'
    }
  },
  subtitle_box: {},
  subtitle_box_layout: {
    position: 'relative',
    height: 'min-content',
    width: 'calc(100% - 56px)',
    margin: '0px 2px 19px'
  },
  });
