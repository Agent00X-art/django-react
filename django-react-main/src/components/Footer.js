/**
 * This source code is exported from pxCode, you can get more document from https://www.pxcode.io
 */
 import React from 'react';
 import { StyleSheet, css } from 'aphrodite/no-important';
 
 export default function Footer(props) {
   return (
     <div className={`footer ${css(styles.block, styles.block_layout)}`}>
       <div className={css(styles.cover_block2, styles.cover_block2_layout)}>
         <div className={css(styles.flex, styles.flex_layout)}>
           <img
            src="31a36120d5661663f20ce626c65a9674.png"
             alt=""
             className={css(styles.img, styles.img_layout)}
           />
           <h5 className={css(styles.highlights2_box, styles.highlights2_box_layout)}>
             <div className={css(styles.highlights2)}>
               <span className={css(styles.highlights2_span0)}>{'ПРОФ'}</span>
               <span className={css(styles.highlights2_span1)}>{'КАМПУС'}</span>
             </div>
           </h5>
         </div>
       </div>
 
       <div className={css(styles.flex1, styles.flex1_layout)}>
         <h2 className={css(styles.medium_title, styles.medium_title_layout)}>{'Карта сайта'}</h2>
         <div className={css(styles.flex1_spacer)} />
         <h2 className={css(styles.medium_title, styles.medium_title_layout1)}>{'Контакты'}</h2>
         <div className={css(styles.flex1_spacer1)} />
         <h2 className={css(styles.medium_title, styles.medium_title_layout)}>{'Другие ресурсы:'}</h2>
       </div>
 
       <div className={css(styles.flex2, styles.flex2_layout)}>
         <div className={css(styles.flex2_item)}>
           <div className={css(styles.flex3, styles.flex3_layout)}>
             <h5 className={css(styles.highlights, styles.highlights_layout)}>
               <a style={{ color: 'rgb(0,0,0)' }} href="b" target="_parent">
                 {'Главная'}
               </a>
             </h5>
             <h5 className={css(styles.highlights, styles.highlights_layout)}>
               <a style={{ color: 'rgb(0,0,0)' }} href="a" target="_parent">
                 {'CНО'}
               </a>
             </h5>
           </div>
           <h5 className={css(styles.highlights, styles.highlights_layout)}>
               <a style={{ color: 'rgb(0,0,0)' }} href="a" target="_parent">
                 {'Студенты'}
               </a>
             </h5>
 
             <div className={css(styles.group1, styles.group1_layout)}>
               <h5 className={css(styles.highlights3, styles.highlights3_layout)}></h5>
               <h5 className={css(styles.highlights, styles.highlights_layout)}>
                 <a style={{ color: 'rgb(0,0,0)' }} href="a" target="_parent">
                   {'Кейсы'}
                 </a>
               </h5>
             </div>
             <div className={css(styles.group1, styles.group1_layout)}>
               <h5 className={css(styles.highlights3, styles.highlights3_layout)}></h5>
               <h5 className={css(styles.highlights, styles.highlights_layout)}>
                 <a style={{ color: 'rgb(0,0,0)' }} href="a" target="_parent">
                   {'Новости'}
                 </a>
               </h5>
             </div>
         </div>
         <div className={css(styles.flex2_spacer)} />
         <div className={css(styles.flex2_item1)}>
           <h5 className={css(styles.highlights1_box, styles.highlights1_box_layout)}>
             <pre className={css(styles.highlights1)}>
               <span className={css(styles.highlights1_span0)}>{'Телефон:\n'}</span>
               <span className={css(styles.highlights1_span1)}>{'+7 (999) 123-45-67\n'}</span>
               <span className={css(styles.highlights11_span0)}>{'Email:\n'}</span>
               <span className={css(styles.highlights11_span1)}>{'username@mail.com\n'}</span>
               <span className={css(styles.highlights11_span0)}>{'Адрес:\n'}</span>
               <span className={css(styles.highlights11_span1)}>{'г. Пенза, ул. Улица, д. 1'}</span>
             </pre>
           </h5>
         </div>
         <div className={css(styles.flex2_spacer1)} />
         <div onClick={() => window.open('https://vk.com/penzgtu', 'top')} className={css(styles.group, styles.group_layout)}>
           <img
             src="1d2b3719527c2ceac28bb47be57426ad.png"
             className={css(styles.image6, styles.icon_layout)}
           />
         </div>
         <div className={css(styles.flex2_spacer2)} />
         <div className={css(styles.flex2_item3)}>
           <div onClick={() => window.open('http://www.penzgtu.ru/', 'top')} className={css(styles.group, styles.group_layout)}>
             <img
               src="gtu.png"
               className={css(styles.image6, styles.icon_layout)}
             />
           </div>
         </div>
       </div>
 
       <div className={css(styles.flex4, styles.flex4_layout)}>
         <div className={css(styles.flex4_item)}>
          
         </div>
         <div className={css(styles.flex4_spacer)} />
         <div className={css(styles.flex4_item1)}>
     
         </div>
       </div>
 
     
       <h5 className={css(styles.highlights4_box, styles.highlights4_box_layout)}>
         <pre className={css(styles.highlights4)}>{'ФГБОУ ВО “ПензГТУ”, 2022\nВсе права защищены'}</pre>
       </h5>
     </div>
   );
 }
 
 Footer.inStorybook = true;
 
 const styles = StyleSheet.create({
   block: {
     display: 'fixed',
     flexDirection: 'column',
     backgroundColor: 'rgb(255,255,255)',
     boxShadow: '0px -12px 31px 0px rgba(0,0,0,0.24705882352941178)'
   },
   block_layout: {
     position: 'relative'
   },
   cover_block2: {
     display: 'flex',
     flexDirection: 'column',
     backgroundColor: 'rgb(255,255,255)',
     boxShadow: '0px 12px 18px 0px rgba(0,0,0,0.2)'
   },
   cover_block2_layout: {
     position: 'relative',
     height: 'min-content',
     margin: '0px 0px 0px 1px'
   },
   flex: {
     display: 'flex',
     flexDirection: 'column'
   },
   flex_layout: {
     position: 'relative',
     height: 'min-content',
     width: '76.94%',
     margin: '9px auto'
   },
   img: {
     width: '100%',
     height: 'auto',
     verticalAlign: 'top',
     objectFit: 'contain',
     objectPosition: 'center top'
   },
   img_layout: {
     position: 'relative',
     width: 87,
     minWidth: 87,
     margin: '3px 0px 0px'
   },
   highlights2: {
     font: '600 15.600000381469727px/1.2 "Raleway", Helvetica, Arial, serif',
     color: 'rgb(0,0,0)',
     letterSpacing: '0px'
   },
   highlights2_box: {},
   highlights2_box_layout: {
     position: 'relative',
     height: 'min-content',
     margin: '1px 1px 0px'
   },
   highlights2_span0: {
     font: '600 1em/1.2 "Raleway", Helvetica, Arial, serif',
     color: '#0f7fccff',
     letterSpacing: '0px'
   },
   highlights2_span1: {
     font: '300 1em/1.2 "Open Sans", Helvetica, Arial, serif',
     color: '#fd6a07ff',
     letterSpacing: '0px'
   },
   flex1: {
     display: 'flex'
   },
   flex1_layout: {
     position: 'relative',
     height: 'min-content',
     width: '66%',
     margin: '41px 16.03% 0px 17.97%'
   },
   medium_title: {
     font: '600 24px/1.2 "Raleway", Helvetica, Arial, serif',
     color: 'rgb(0,0,0)',
     letterSpacing: '0px'
   },
   medium_title_layout: {
     position: 'relative',
     flex: '0 0 auto',
     height: 'min-content'
   },
   medium_title_layout1: {
    position: 'relative',
    flex: '0 0 auto',
    height: 'min-content',
    marginLeft: '-40px'
  },
   flex1_spacer: {
     flex: '0 1 235px'
   },
   flex1_spacer1: {
     flex: '0 1 266px'
   },
   flex2: {
     display: 'flex'
   },
   flex2_layout: {
     position: 'relative',
     height: 'min-content',
     width: '63.91%',
     margin: '4px auto 0px'
   },
   flex2_item: {
     display: 'flex',
     flexDirection: 'column',
     position: 'relative',
     flex: '0 1 65px'
   },
   flex3: {
     display: 'flex',
     flexDirection: 'column'
   },
   flex3_layout: {
     position: 'relative',
     height: 'min-content',
     margin: '8px 0px 2px'
   },
   highlights: {
     font: '300 17px/1.2 "Open Sans", Helvetica, Arial, serif',
     color: 'rgb(0,0,0)',
     letterSpacing: '0px',
     cursor: 'pointer'
   },
   highlights_layout: {
     position: 'relative',
     height: 'min-content'
   },
   highlights_layout1: {
     position: 'relative',
     height: 'min-content',
     margin: '4px 29px 0px 0px'
   },
   flex2_spacer: {
     flex: '0 1 315px'
   },
   flex2_item1: {
     display: 'flex',
     flexDirection: 'column',
     position: 'relative',
     flex: '1 1 150px'
   },
   highlights1: {
     overflow: 'visible',
     marginTop: 0,
     marginBottom: 0,
     margin: 0,
     font: '17px/1.2 "Open Sans", Helvetica, Arial, serif',
     color: 'rgb(0,0,0)',
     letterSpacing: '0px',
     whiteSpace: 'pre-wrap'
   },
   highlights1_box: {},
   highlights1_box_layout: {
     position: 'relative',
     height: 'min-content',
     margin: '8px 0px 0px -45px'
   },
   highlights1_span0: {
     font: '1em/1.2 "Open Sans", Helvetica, Arial, serif',
     color: '#000000ff',
     letterSpacing: '0px'
   },
   highlights1_span1: {
     font: '300 1em/1.2 "Open Sans", Helvetica, Arial, serif',
     color: '#000000ff',
     letterSpacing: '0px'
   },
   flex2_spacer1: {
     flex: '0 1 230px'
   },
   flex2_item2: {
     display: 'flex',
     flexDirection: 'column',
     position: 'relative',
     flex: '0 1 40px'
   },
   icon: {
     background: 'var(--src) center center / contain no-repeat',
     display: 'block',
     cursor: 'pointer'
   },
   icon_layout: {
     position: 'relative',
     height: 40,
     width: 40,
     minWidth: 40,
     margin: '0px 0px 10px'
   },
   flex2_spacer2: {
     flex: '0 1 20px'
   },
   flex2_item3: {
     display: 'flex',
     flexDirection: 'column',
     position: 'relative',
     flex: '0 1 35px'
   },
   group: {
     display: 'flex',
     flexDirection: 'column',
     cursor: 'pointer'
   },
   group_layout: {
     position: 'relative',
     height: 'min-content',
     margin: '0px 0px 10px'
   },
   image6: {
     width: '100%',
     height: 'auto',
     verticalAlign: 'top',
     objectFit: 'contain',
     objectPosition: 'center top'
   },
   image6_layout: {
     position: 'relative',
     width: 35,
     minWidth: 35
   },
   flex4: {
     display: 'flex'
   },
   flex4_layout: {
     position: 'relative',
     height: 'min-content',
     width: '63.91%',
     margin: '2px auto 0px'
   },
   flex4_item: {
     display: 'flex',
     flexDirection: 'column',
     position: 'relative',
     flex: '0 1 108px'
   },
   flex5: {
     display: 'flex',
     flexDirection: 'column'
   },
   flex5_layout: {
     position: 'relative',
     height: 'min-content',
     margin: '0px 0px 4px'
   },
   group1: {
     display: 'flex',
     flexDirection: 'column'
   },
   group1_layout: {
     position: 'relative',
     height: 'min-content',
     margin: '4px 0px 0px'
   },
   highlights3: {
     font: '300 17px/1.2 "Open Sans", Helvetica, Arial, serif',
     color: 'rgb(0,0,0)',
     letterSpacing: '0px'
   },
   highlights3_layout: {
     position: 'absolute',
     top: 0,
     height: 'min-content',
     bottom: 0,
     left: 0,
     right: 0
   },
   flex4_spacer: {
     flex: '0 1 272px'
   },
   flex4_item1: {
     display: 'flex',
     flexDirection: 'column',
     position: 'relative',
     flex: '1 1 169px'
   },
   highlights11_box: {},
   highlights11_box_layout: {
     position: 'relative',
     height: 'min-content',
     margin: '2px 0px 0px'
   },
   highlights11_span0: {
     font: '1em/1.2 "Open Sans", Helvetica, Arial, serif',
     color: '#000000ff',
     letterSpacing: '0px'
   },
   highlights11_span1: {
     font: '300 1em/1.2 "Open Sans", Helvetica, Arial, serif',
     color: '#000000ff',
     letterSpacing: '0px'
   },
   highlights11: {
     overflow: 'visible',
     marginTop: 0,
     marginBottom: 0,
     margin: 0,
     font: '17px/1.2 "Open Sans", Helvetica, Arial, serif',
     color: 'rgb(0,0,0)',
     letterSpacing: '-0.1px',
     whiteSpace: 'pre-wrap'
   },
   highlights11_box: {},
   highlights11_box_layout1: {
     position: 'relative',
     height: 'min-content',
     width: '13.19%',
     margin: '4px auto 0px'
   },
   highlights11_span0: {
     font: '1em/1.2 "Open Sans", Helvetica, Arial, serif',
     color: '#000000ff',
     letterSpacing: '0px'
   },
   highlights11_span1: {
     font: '300 1em/1.2 "Open Sans", Helvetica, Arial, serif',
     color: '#000000ff',
     letterSpacing: '0px'
   },
   highlights4: {
     overflow: 'visible',
     marginTop: 0,
     marginBottom: 0,
     margin: 0,
     font: '300 17px/1.2 "Open Sans", Helvetica, Arial, serif',
     color: 'rgb(0,0,0)',
     letterSpacing: '0px',
     whiteSpace: 'pre-wrap'
   },
   highlights4_box: {},
   highlights4_box_layout: {
     position: 'relative',
     height: 'min-content',
     width: '15.27%',
     margin: '122px 73.35% 40px 11.38%'
   }
 });
 