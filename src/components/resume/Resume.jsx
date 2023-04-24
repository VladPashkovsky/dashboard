import React from 'react'
import './resume.css'
import PhotoSmall from './Photo_small.jpg'

const Resume = () => {
  return (
    <div className='resume_wrapper'>
      <div className='resume_left'>
        <div className='resume_image'>
          <img src={PhotoSmall} alt='Resume_image' />
        </div>
        <div className='resume_bottom'>
          <div className='resume_item resume_namerole'>
            <div className='name'>Владислав Пашковский</div>
            <div className='role'>Frontend-разработчик (React)</div>
          </div>
          <div className='resume_item resume_profile'>
            <div className='resume_title'>Обо мне</div>
            <div className='resume_info'>
              До 2020 года работал в сфере недвижимости - Агент по поиску жилой / коммерческой недвижимости.
              За 2 года изучения JavaScript изучил следующий стек технологий:
              HTML, CSS (SCSS), JavaScript, Typescript, React JS, Next, Redux/Redux Toolkit/RTK Query, Git.
              С начала 2022 года практикуюсь удаленно на различных Pet-проектах.
            </div>
          </div>

              <div className="resume_item resume_address">
                <div className="resume_title">Адрес</div>
                <div className="resume_info">
                  г. Москва,<br/>
                  ул. Лухманоская, д. 17 к. 1<br/>
                </div>
              </div>

              <div className="resume_item resume_contact">
                <div className="resume_title">Контакты</div>
                <div className="resume_info">
                  <div className="resume_subtitle">Телефон</div>
                  <div className="resume_subinfo">+7 903 190-63-44</div>
                </div>
                <div className="resume_info">
                  <div className="resume_subtitle">Email</div>
                  <div className="resume_subinfo">v.v.pashkovsky@gmail.com</div>
                </div>
                <div className="resume_info">
                  <div className="resume_subtitle">Github</div>
                  <div className="resume_subinfo">https://github.com/VladPashkovsky</div>
                </div>
              </div>

              <div className="resume_item resume_skills">
                <div className="resume_title">Skills</div>
                <div className="resume_info">
                  <div className="skills_list">
                    <div className="skills_left">HTML</div>
                    <div className="skills_bar">
                      <p>
                        {/*<span style="width: 80%"></span>*/}
                      </p>
                    </div>
                  </div>
                  <div className="skills_list">
                    <div className="skills_left">CSS</div>
                    <div className="skills_bar">
                      <p>
                        {/*<span style="width: 70%"></span>*/}
                      </p>
                    </div>
                  </div>
                  <div className="skills_list">
                    <div className="skills_left">Javascript</div>
                    <div className="skills_bar">
                      <p>
                        {/*<span style="width: 90%"></span>*/}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
        </div>


        <div className="resume_right">
          <div className="resume_item resume_namerole">
            <div className="name">Владислав Пашковский</div>
            <div className="role">Frontend-разработчик (React)</div>
          </div>
          <div className="resume_item resume_education">
            <div className="resume_title">Образование</div>
            <div className="resume_info">
              <div className="resume_data">
                <div className="year">2006 - 2009</div>
                <div className="content">
                  <p>Аспирантура.</p>
                  <p>Институт Государственного Администрирования г. Москва</p>
                </div>
              </div>
              <div className="resume_data">
                <div className="year">2001 - 2006</div>
                <div className="content">
                  <p>Высшее юридическое.</p>
                  <p>Институт государственного Администрирования г. Москва</p>
                </div>
              </div>
            </div>
          </div>

          <div className="resume_item resume_experience">
            <div className="resume_title">Soft Skills</div>
            <div className="resume_info" style={{marginBottom: '47px'}}>
              <div className="resume_data">
                <div className="year"></div>
                <div className="content">
                  <p>Коммуникабельность</p>
                </div>
              </div>

              <div className="resume_data">
                <div className="year"></div>
                <div className="content">
                  <p>Вежливость</p>
                </div>
              </div>

              <div className="resume_data">
                <div className="year"></div>
                <div className="content">
                  <p>Субординаия</p>
                </div>
              </div>

              <div className="resume_data">
                <div className="year"></div>
                <div className="content">
                  <p>Умение выстраивать отношения с коллегами и начальством</p>
                </div>
              </div>

              <div className="resume_data">
                <div className="year"></div>
                <div className="content">
                  <p>Опыт ведения переговоров</p>
                </div>
              </div>
            </div>
          </div>

          <div className="resume_item resume_experience" >
            <div className="resume_title">Experience</div>
            <div className="resume_info" style={{marginBottom: '62px'}}>
              <div className="resume_data">
                <div className="year">2022 - по наст. время</div>
                <div className="content">
                  <p>Практика.</p>
                  <p>Практика приминения и дальнейшее изучение технологий с использованием Next, Redux/Redux Toolkit/RTK Query</p>
                </div>
              </div>
              <div className="resume_data">
                <div className="year">2020 - 2022</div>
                <div className="content">
                  <p>Обучение.</p>
                  <p>Самостоятельное изучение основ JS, HTM, CSS, React.</p>
                </div>
              </div>
            </div>
          </div>


          <div className="resume_item resmue_interests">
            <div className="resume_title">Interests</div>
            <div className="resume_info">
              <div className="interests">
                <div className="int_icon">
                  <i className="fa-sharp fa-solid fa-landmark"></i>
                </div>
                <div className="int_data">History</div>
              </div>
              <div className="interests">
                <div className="int_icon">
                  <i className="fas fa-book-open"></i>
                </div>
                <div className="int_data">Reading</div>
              </div>
              <div className="interests">
                <div className="int_icon">
                  <i className="fas fa-film"></i>
                </div>
                <div className="int_data">Movies</div>
              </div>
              <div className="interests">
                <div className="int_icon">
                  <i className="fa-solid fa-earth-americas"></i>
                </div>
                <div className="int_data">Traveling</div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Resume