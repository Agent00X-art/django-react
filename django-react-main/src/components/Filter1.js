// frontend/src/components/Modal.js

import React, { PureComponent } from "react";
import {
  Modal,
  ModalBody,
} from "reactstrap";
import { StyleSheet, css } from 'aphrodite/no-important';
import Exp from "./filter/exp";
import Speciality from "./filter/speciality";
import Age from "./filter/age"
import Sex from "./filter/sex"

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
  changeON3() {
    this.setState({ on3: !this.state.on3 })
  }
  changeON4() {
    this.setState({ on4: !this.state.on4 })
  }
  
Filter = () => {
  var one = "Без опыта,3-6 мес,Полгода,1 год,Более года,"
  var two = "IT и цифровые технологии,Медицинские технологии,Химические технологии,Биотехнологии,Ресурсосберегающая энергетика,Образовательные технологии,Экономика,Интелектуальные технологии,Дизайн"
  var three = "True,False"
  var four = "женский,мужской,"
  if (this.state.on1value!=null) {
    one = this.state.on1value
  }
  if (this.state.on2value!=null) {
    two = this.state.on2value
  }
  if (this.state.on3value!=null) {
    three = this.state.on3value
  }
  if (this.state.on4value!=null) {
    four = this.state.on4value
  }
    var result = one +";"+ two +";"+ three +";"+ four
    this.props.OnSelectBack(result);     
    console.log(result) 
}

state = { on1value: '',
          on2value: '',
          on3value: '',
          on4value: '',
        }

handleOn1 = (inp) => {
      this.setState({on1value: inp});
  }
handleOn2 = (inp) => {
    this.setState({on2value: inp});
}
handleOn3 = (inp) => {
  this.setState({on3value: inp});
}
handleOn4 = (inp) => {
  this.setState({on4value: inp});
}

handleBackChange = () => {
    var back = this.state.on1value;
    var back2 = this.state.on2value;
    var back3 = this.state.on3value;
    var back4 = this.state.on4value;
    console.clear()
    console.log("exp:" + back);
    console.log("speciality:" + back2);
    console.log("adult:" + back3);
    console.log("sex:" + back4);
}
componentDidUpdate(){
  this.handleBackChange()
}
  render() {
   
    const { toggle} = this.props;
    return (
      <Modal isOpen={true} toggle={toggle} contentClassName={css(styles.block)}>
        <ModalBody className={css(styles.block_modal)}>
          <div className={css(styles.flex1, styles.flex1_layout)}>
            <div className={css(styles.flex1_item)}>
              <h1 className={css(styles.hero_title, styles.hero_title_layout)}>{'Фильтр:'}</h1>
            </div>
            <div className={css(styles.flex1_spacer)} />
            <img
              src="432beaef2af1ff428c1e156bf3a417e6.png"
              className={css(styles.icon1, styles.icon1_layout)}
              onClick={() => toggle(this.toggle)}
            />
          </div>

          <div className={css(styles.block1_layout)} >
            {
              this.state.on1 ? (
                <div>
                <div className={css(styles.block_selected)}>
                <div className={css(styles.flex2, styles.flex2_layout)}onClick={this.changeON1.bind(this)}>
                  <h3 className={css(styles.subtitle_selected, styles.subtitle_layout)} >{'Опыт работы'} </h3>
                  <div className={css(styles.flex2_spacer)} />
                  <div className={css(styles.flex2_item)}>
                    <div className={css(styles.cover_group, styles.cover_group_layout)}>
                      <img
                        src="d2b848708ef3193a0b78d8b24ee6dd6a.png"
                        className={css(styles.icon1, styles.icon1_layout)}
                      />
                    </div>
                  </div> </div></div>
                <Exp OnSelectOn1={this.handleOn1}/></div>
              ) : (
                <div className={css(styles.block1)}>
                  <div className={css(styles.flex2, styles.flex2_layout)}onClick={this.changeON1.bind(this)}>
                    <h3 className={css(styles.subtitle, styles.subtitle_layout)} >{'Опыт работы'} </h3>
                    <div className={css(styles.flex2_spacer)} />
                    <div className={css(styles.flex2_item)}>
                      <div className={css(styles.cover_group, styles.cover_group_layout)}>
                        <img
                          src="35667dd839c5a1e94edc7b492a56cf02.png"
                          className={css(styles.image, styles.image_layout)}
                        />
                        <img
                          src="40082911b2ac87e9d4dac402cf948aed.png"
                          className={css(styles.icon1, styles.icon1_layout)}
                        />
                      </div>
                    </div> </div></div>)
            }
          </div>

          <div className={css(styles.block2_layout)} >
            {
              this.state.on2 ? (
                <div>
                <div className={css(styles.block_selected)}>
                <div className={css(styles.flex2, styles.flex2_layout)}onClick={this.changeON2.bind(this)}>
                  <h3 className={css(styles.subtitle_selected, styles.subtitle_layout)} >{'Специальность'} </h3>
                  <div className={css(styles.flex2_spacer)} />
                  <div className={css(styles.flex2_item)}>
                    <div className={css(styles.cover_group, styles.cover_group_layout)}>
                      <img
                        src="d2b848708ef3193a0b78d8b24ee6dd6a.png"
                        className={css(styles.icon1, styles.icon1_layout)}
                      />
                    </div>
                  </div> </div></div>
                  <Speciality OnSelectOn2={this.handleOn2}/></div>
              ) : (
                <div className={css(styles.block2)}>
                  <div className={css(styles.flex2, styles.flex2_layout)}onClick={this.changeON2.bind(this)}>
                    <h3 className={css(styles.subtitle, styles.subtitle_layout)} >{'Специальность'} </h3>
                    <div className={css(styles.flex2_spacer)} />
                    <div className={css(styles.flex2_item)}>
                      <div className={css(styles.cover_group, styles.cover_group_layout)}>
                        <img
                          src="35667dd839c5a1e94edc7b492a56cf02.png"
                          className={css(styles.image, styles.image_layout)}
                        />
                        <img
                          src="40082911b2ac87e9d4dac402cf948aed.png"
                          className={css(styles.icon1, styles.icon1_layout)}
                        />
                      </div>
                    </div> </div></div>)
            }
          </div>
          
        

          <div className={css(styles.block2_layout)} >
            {
              this.state.on3 ? (
                <div>
                <div className={css(styles.block_selected)}>
                <div className={css(styles.flex2, styles.flex2_layout)}onClick={this.changeON3.bind(this)}>
                  <h3 className={css(styles.subtitle_selected, styles.subtitle_layout)} >{'Возраст'} </h3>
                  <div className={css(styles.flex2_spacer)} />
                  <div className={css(styles.flex2_item)}>
                    <div className={css(styles.cover_group, styles.cover_group_layout)}>
                      <img
                        src="d2b848708ef3193a0b78d8b24ee6dd6a.png"
                        className={css(styles.icon1, styles.icon1_layout)}
                      />
                    </div>
                  </div> </div></div>
                  <Age OnSelectOn3={this.handleOn3}/></div>
              ) : (
                <div className={css(styles.block2)}>
                  <div className={css(styles.flex2, styles.flex2_layout)}onClick={this.changeON3.bind(this)}>
                    <h3 className={css(styles.subtitle, styles.subtitle_layout)} >{'Возраст'} </h3>
                    <div className={css(styles.flex2_spacer)} />
                    <div className={css(styles.flex2_item)}>
                      <div className={css(styles.cover_group, styles.cover_group_layout)}>
                        <img
                          src="35667dd839c5a1e94edc7b492a56cf02.png"
                          className={css(styles.image, styles.image_layout)}
                        />
                        <img
                          src="40082911b2ac87e9d4dac402cf948aed.png"
                          className={css(styles.icon1, styles.icon1_layout)}
                        />
                      </div>
                    </div> </div></div>)
            }
          </div>

          <div className={css(styles.block2_layout)} >
            {
              this.state.on4 ? (
                <div>
                <div className={css(styles.block_selected)}>
                <div className={css(styles.flex2, styles.flex2_layout)}onClick={this.changeON4.bind(this)}>
                  <h3 className={css(styles.subtitle_selected, styles.subtitle_layout)} >{'Пол'} </h3>
                  <div className={css(styles.flex2_spacer)} />
                  <div className={css(styles.flex2_item)}>
                    <div className={css(styles.cover_group, styles.cover_group_layout)}>
                      <img
                        src="d2b848708ef3193a0b78d8b24ee6dd6a.png"
                        className={css(styles.icon1, styles.icon1_layout)}
                      />
                    </div>
                  </div> </div></div>
                  <Sex OnSelectOn4={this.handleOn4}/></div>
              ) : (
                <div className={css(styles.block2)}>
                  <div className={css(styles.flex2, styles.flex2_layout)}onClick={this.changeON4.bind(this)}>
                    <h3 className={css(styles.subtitle, styles.subtitle_layout)} >{'Пол'} </h3>
                    <div className={css(styles.flex2_spacer)} />
                    <div className={css(styles.flex2_item)}>
                      <div className={css(styles.cover_group, styles.cover_group_layout)}>
                        <img
                          src="35667dd839c5a1e94edc7b492a56cf02.png"
                          className={css(styles.image, styles.image_layout)}
                        />
                        <img
                          src="40082911b2ac87e9d4dac402cf948aed.png"
                          className={css(styles.icon1, styles.icon1_layout)}
                        />
                      </div>
                    </div> </div></div>)
            }
          </div>
          <div className={css(styles.cover_block, styles.cover_block_layout)} onClick={() => {this.handleBackChange(); toggle(this.toggle); this.Filter(); }}>
            <h1 className={css(styles.hero_title1, styles.hero_title1_layout)} >{'Поиск'}</h1>
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
    // width: '40%x',
    // height: '70%px',
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
    margin: '0px 0% 0px 37.43%',
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
  block_selected: {
    display: 'flex',
    flexDirection: 'column',
    border: '2px solid rgb(146,143,143)',
    borderRadius: '30px 30px 0px 0px',
    cursor: 'pointer',
    boxShadow: '0px 12px 21px 7px rgba(0,0,0,0.24705882352941178)',
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
    letterSpacing: '0px',
  },
  subtitle_selected: {
    font: '600 20px/1.2 "Raleway", Helvetica, Arial, serif',
    color: "rgb(253, 106, 7)",
    letterSpacing: '0px'
  },
  subtitle_layout: {
    position: 'relative',
    flex: '0 0 auto',
    height: 'min-content',
    margin: '9px 0px 7px 13px',
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
    background: 'var(--src) center center / contain no-repeat',
    cursor: 'pointer'
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
