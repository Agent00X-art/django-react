// frontend/src/components/Modal.js

import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";
import { StyleSheet, css } from 'aphrodite/no-important';

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem
    };
  }

  handleChange = e => {
    let { name, value } = e.target;
    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }
    const activeItem = { ...this.state.activeItem, [name]: value };
    this.setState({ activeItem });
  };

  render() {
    const { toggle, onSave } = this.props;
    return (
      <Modal isOpen={true} toggle={toggle} contentClassName={css(styles.block)}>
        <ModalBody className={css(styles.block)}> 
           <div className={css(styles.flex1, styles.flex1_layout)}>
             <div className={css(styles.flex1_item)}>
               <h1 className={css(styles.hero_title, styles.hero_title_layout)}>{'Фильтр:'}</h1>
             </div>
             <div className={css(styles.flex1_spacer)} />
             <button onClick ={() => toggle(this.toggle)}>
        x
      </button>
           </div>
 
           <div className={css(styles.block1, styles.block1_layout)} onClick={() => alert('It is clickable')}>
             <div className={css(styles.flex2, styles.flex2_layout)}>
               <h3 className={css(styles.subtitle, styles.subtitle_layout)}>{'Опыт работы'}</h3>
               <div className={css(styles.flex2_spacer)} />
               <div className={css(styles.flex2_item)}>
                 <div className={css(styles.cover_group, styles.cover_group_layout)}>
                   <div
                    //  style={{ '--src': `url(${require('assets/35667dd839c5a1e94edc7b492a56cf02.png').default})` }}
                     className={css(styles.image, styles.image_layout)}
                   />
                   <div
                    //  style={{ '--src': `url(${require('assets/40082911b2ac87e9d4dac402cf948aed.png').default})` }}
                     className={css(styles.icon1, styles.icon1_layout)}
                   />
                 </div>
               </div>
             </div>
           </div>
 
           <div className={css(styles.block2, styles.block2_layout)} onClick={() => alert('It is clickable')}>
             <div className={css(styles.flex2, styles.flex2_layout)}>
               <h3 className={css(styles.subtitle, styles.subtitle_layout)}>{'Специальность'}</h3>
               <div className={css(styles.flex2_spacer1)} />
               <div className={css(styles.flex2_item)}>
                 <div className={css(styles.cover_group, styles.cover_group_layout)}>
                   <div
                    //  style={{ '--src': `url(${require('assets/35667dd839c5a1e94edc7b492a56cf02.png').default})` }}
                     className={css(styles.image, styles.image_layout)}
                   />
                   <div
                    //  style={{ '--src': `url(${require('assets/40082911b2ac87e9d4dac402cf948aed.png').default})` }}
                     className={css(styles.icon2, styles.icon2_layout)}
                   />
                 </div>
               </div>
             </div>
           </div>
 
           <div className={css(styles.block2, styles.block2_layout)} onClick={() => alert('It is clickable')}>
             <div className={css(styles.flex2, styles.flex2_layout)}>
               <h3 className={css(styles.subtitle, styles.subtitle_layout)}>{'Возраст'}</h3>
               <div className={css(styles.flex2_spacer2)} />
               <div className={css(styles.flex2_item)}>
                 <div className={css(styles.cover_group, styles.cover_group_layout)}>
                   <div
                    //  style={{ '--src': `url(${require('assets/35667dd839c5a1e94edc7b492a56cf02.png').default})` }}
                     className={css(styles.image, styles.image_layout)}
                   />
                   <div
                    //  style={{ '--src': `url(${require('assets/40082911b2ac87e9d4dac402cf948aed.png').default})` }}
                     className={css(styles.icon3, styles.icon3_layout)}
                   />
                 </div>
               </div>
             </div>
           </div>
 
           <div className={css(styles.block2, styles.block2_layout)} onClick={() => alert('It is clickable')}>
             <div className={css(styles.flex2, styles.flex2_layout)}>
               <h3 className={css(styles.subtitle, styles.subtitle_layout)}>{'Пол'}</h3>
               <div className={css(styles.flex2_spacer3)} />
               <div className={css(styles.flex2_item)}>
                 <div className={css(styles.cover_group, styles.cover_group_layout)}>
                   <div
                    //  style={{ '--src': `url(${require('assets/35667dd839c5a1e94edc7b492a56cf02.png').default})` }}
                     className={css(styles.image, styles.image_layout)}
                   />
                   <div
                    //  style={{ '--src': `url(${require('assets/40082911b2ac87e9d4dac402cf948aed.png').default})` }}
                     className={css(styles.icon4, styles.icon4_layout)}
                   />
                 </div>
               </div>
             </div>
           </div>
           {/* <Button color="success" onClick={() => onSave(this.state.activeItem)}>
            Сохранить
          </Button> */}
           <div className={css(styles.cover_block, styles.cover_block_layout)} onClick={() => alert('It is clickable')}>
             <h1 className={css(styles.hero_title1, styles.hero_title1_layout)}>{'Поиск'}</h1>
           </div>
      </ModalBody>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  block: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(255,255,255)',
    boxShadow: '0px 0px 55px 0px rgba(0,0,0,0.5490196078431373)',
    borderRadius: '35px 35px 35px 35px',
    width: '40%x',
    height: '70%px',
    '@media (max-width: 767px)': {
      width: '100%',
      height: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      display: '',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      overflow: 'auto'
    }
  },
  modal: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'no',

    borderRadius: '35px 35px 35px 35px',
  },
  flex: {
    display: 'flex',
    flexDirection: 'column'
  },
  flex_layout: {
    position: 'relative',
    height: 'min-content',
    width: 553,
    minWidth: 553,
    margin: '19px 20px'
  },
  flex1: {
    display: 'flex'
  },
  flex1_layout: {
    position: 'relative',
    height: 'min-content',
    width: '62.57%',
    margin: '0px 0% 0px 37.43%'
  },
  flex1_item: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: '0 0 auto'
  },
  hero_title: {
    font: '600 36px/1.2 "Raleway", Helvetica, Arial, serif',
    color: 'rgb(0,0,0)',
    letterSpacing: '0px'
  },
  hero_title_layout: {
    position: 'relative',
    height: 'min-content',
    width: 149,
    minWidth: 149,
    margin: '0px 0px'
  },
  flex1_spacer: {
    flex: '0 1 157px'
  },
  flex1_item1: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: '0 1 40px'
  },
  icon: {
    background: 'var(--src) center center / contain no-repeat',
    cursor: 'pointer'
  },
  icon_layout: {
    position: 'relative',
    height: 40,
    width: 40,
    minWidth: 40,
    margin: '0px 0px 4px'
  },
  block1: {
    display: 'flex',
    flexDirection: 'column',
    border: '2px solid rgb(146,143,143)',
    borderRadius: '30px 30px 30px 30px',
    cursor: 'pointer'
  },
  block1_layout: {
    position: 'relative',
    height: 'min-content',
    margin: '31px 26px 0px 27px'
  },
  flex2: {
    display: 'flex'
  },
  flex2_layout: {
    position: 'relative',
    height: 'min-content',
    margin: '10px 14px'
  },
  subtitle: {
    font: '600 20px/1.2 "Raleway", Helvetica, Arial, serif',
    color: 'rgb(145,143,143)',
    letterSpacing: '0px'
  },
  subtitle_layout: {
    position: 'relative',
    flex: '0 0 auto',
    height: 'min-content',
    margin: '9px 0px 7px 13px'
  },
  flex2_spacer: {
    flex: '0 1 285px'
  },
  flex2_item: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: '0 1 40px'
  },
  cover_group: {
    display: 'flex',
    flexDirection: 'column'
  },
  cover_group_layout: {
    position: 'relative',
    height: 'min-content'
  },
  image: {
    background: 'var(--src) center center / contain no-repeat'
  },
  image_layout: {
    position: 'absolute',
    top: 0,
    height: 9,
    left: 0,
    width: 18,
    minWidth: 18,
    margin: '17px 11px 14px'
  },
  icon1: {
    background: 'var(--src) center center / contain no-repeat'
  },
  icon1_layout: {
    position: 'relative',
    height: 40,
    width: 40,
    minWidth: 40
  },
  block2: {
    display: 'flex',
    flexDirection: 'column',
    border: '2px solid rgb(146,143,143)',
    borderRadius: '30px 30px 30px 30px',
    cursor: 'pointer'
  },
  block2_layout: {
    position: 'relative',
    height: 'min-content',
    margin: '25px 26px 0px 27px'
  },
  flex2_spacer1: {
    flex: '0 1 264px'
  },
  cover_group: {
    display: 'flex',
    flexDirection: 'column'
  },
  icon2: {
    background: 'var(--src) center center / contain no-repeat'
  },
  icon2_layout: {
    position: 'relative',
    height: 40,
    width: 40,
    minWidth: 40
  },
  block2: {
    display: 'flex',
    flexDirection: 'column',
    border: '2px solid rgb(146,143,143)',
    borderRadius: '30px 30px 30px 30px',
    cursor: 'pointer'
  },
  flex2_spacer2: {
    flex: '0 1 333px'
  },
  cover_group: {
    display: 'flex',
    flexDirection: 'column'
  },
  icon3: {
    background: 'var(--src) center center / contain no-repeat'
  },
  icon3_layout: {
    position: 'relative',
    height: 40,
    width: 40,
    minWidth: 40
  },
  block2: {
    display: 'flex',
    flexDirection: 'column',
    border: '2px solid rgb(146,143,143)',
    borderRadius: '30px 30px 30px 30px',
    cursor: 'pointer'
  },
  flex2_spacer3: {
    flex: '0 1 375px'
  },
  cover_group: {
    display: 'flex',
    flexDirection: 'column'
  },
  icon4: {
    background: 'var(--src) center center / contain no-repeat'
  },
  icon4_layout: {
    position: 'relative',
    height: 40,
    width: 40,
    minWidth: 40
  },
  cover_block: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(253,106,7)',
    borderRadius: '30.5px 30.5px 30.5px 30.5px',
    cursor: 'pointer'
  },
  cover_block_layout: {
    position: 'relative',
    height: 'min-content',
    width: '45.21%',
    margin: '50px auto 31px'
  },
  hero_title1: {
    display: 'flex',
    justifyContent: 'flex-end',
    font: '600 40px/1.2 "Raleway", Helvetica, Arial, serif',
    color: 'rgb(255,255,255)',
    textAlign: 'right',
    letterSpacing: '0px'
  },
  hero_title1_layout: {
    position: 'relative',
    height: 'min-content',
    margin: '7px 54px 6px'
  }
});
