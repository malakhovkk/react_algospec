
import './style.css';

function Main() {
  return (
      <>
    <div className="wrapper">
    <header className="algospec">
      <div className="algospec__logo"><img className="algospec__img" src="./img/logo.png"/></div>
      <ul className="navigation">
        <li className="navigation__item"><a href="/main">Что такое AlgoSpec?</a></li> 
        <li className="navigation__item"><a href="/problems">Содержание</a></li>
        <li className="navigation__item"><a href="#">Покупка</a></li>
        <li className="navigation__item"><a href="#">Войти</a></li>
      </ul>
    </header>
    <section className="one_step">
      <div className="one_step__left">
        <p className="one_step__first">Остался один шаг на пути к мечте.</p>
        <p className="one_step__second">Отточите навыки программирования перед важным интервью.</p>
        <div  className="one_step__join"><a className="one_step__caption" href="#join">Присоединиться</a></div>
      </div>
      <div className="one_step__right">
        <img className="one_step__girl" src="./img/girl.png"/>
      </div>
    </section>
    <section className="whatcontains">
      <div className="whatcontains__title">
        <p>Из чего состоит курс?</p>
      </div>
        <div className="whatcontains__content">
          <ul className="whatcontains__tasks">
            <li className="whatcontains__item">
              <img className="whatcontains__image" src="./img/icon1.png"/>
              <p className="whatcontains__title2">100 задач для интеревью</p>
              <p className="whatcontains__description"> Подготовка к интервью — это сложная задача, котороая под силу не каждому программисту. Именно эту задачу мы решаем. Мы сделали разбор 100 лучших задач для удачного прохождения интервью.</p>
            </li>
            <li className="whatcontains__item">
              <img className="whatcontains__image" src="./img/icon2.png"/>
              <p className="whatcontains__title2">30+ часов объяснений</p>
              <p className="whatcontains__description"> Алгоритмы порой даются трудно, записав их объяснение на листочке. Поэтому мы решили сделать подробное видео-объяснение каждой задачи. Общая продолжительность всех видео - больше 30 часов.</p>
            </li>
            <li className="whatcontains__item">
              <img className="whatcontains__image" src="./img/icon3.png"/>
              <p className="whatcontains__title2">Решения на 4 языках</p>
              <p className="whatcontains__description"> Каждый язык создан для разных целей. А программисты решают разные задачи. По этой причине мы разобрали задачи на 4 языках программирования: JS, C++, Python, Java.</p>
            </li>
            <li className="whatcontains__item">
              <img className="whatcontains__image" src="./img/icon4.png"/>
              <p className="whatcontains__title2">Сложность алгоритма и ресурсозатратность</p>
              <p className="whatcontains__description"> Понимание того, сколько времени и сколько памяти занимает тот или иной алгоритм - невероятно важно. Объяснение каждой задачи включает себя это.</p>
            </li>
          </ul>
        </div>
    </section>
    <section className="job">
      <div className="job__title">Изучив наш курс, у вас будет возможность попасть в</div>
      <div className="job__content">
        <div className="job__item"><img src="./img/job1.png"/></div>
        <div className="job__item"><img src="./img/job2.png"/></div>
        <div className="job__item"><img src="./img/job3.png"/></div>
        <div className="job__item"><img src="./img/job4.png"/></div>
        <div className="job__item"><img src="./img/job5.png"/></div>
        <div className="job__item"><img src="./img/job6.png"/></div>
      </div>
    </section>
    <section className="topic">
      <div className="topic__title">Задачи будут посвящены следующим темам </div>
      <ul className="topic__questions">
        <li className="topic__question">
          <img src="./img/task1.png"/>
          <div className="topic__name">Бинарные деревья поиска</div>
        </li>
        <li className="topic__question">
          <img src="./img/task2.png"/>
      <div className="topic__name">Бинарные деревья </div>
        </li>
        <li className="topic__question">
          <img src="./img/task3.png"/>
          <div className="topic__name">Стек</div>
        </li>
        <li className="topic__question">
          <img src="./img/task4.png"/>
         <div className="topic__name"> Куча</div>
        </li>
        <li className="topic__question">
          <img src="./img/task5.png"/>
         <div className="topic__name"> Рекурсия</div>
        </li>
        <li className="topic__question">
          <img src="./img/task6.png"/>
         <div className="topic__name"> Сортировка</div>
        </li>
        <li className="topic__question">
          <img  src="./img/task7.png"/>
          <div className="topic__name">Динамическое программирование</div>
        </li>
        <li className="topic__question">
          <img src="./img/task8.png"/>
          <div className="topic__name">Графы</div>
        </li>
        <li className="topic__question">
          <img src="./img/task9.png"/>
         <div className="topic__name"> Массивы</div>
        </li>
        <li className="topic__question">
          <img src="./img/task10.png"/>
         <div className="topic__name"> Строки</div>
        </li>
      </ul>
      
      
    </section>



    <section className="whatcontains">
      <div className="whatcontains__title" id="title">
        <p>4 языка программирования </p>
      </div>
        <div className="whatcontains__content">
          <ul className="whatcontains__tasks">
            <li className="whatcontains__item">
              <img className="whatcontains__image" src="./img/l1.png"/>
              <p className="whatcontains__title2 ht"> JavaScript</p>
              <p className="whatcontains__description"> Для веб-разработчиков</p>
            </li>
            <li className="whatcontains__item">
              <img className="whatcontains__image" src="./img/l2.png"/>
              <p className="whatcontains__title2 ht">С++</p>
              <p className="whatcontains__description"> Для разработчиков микропроцессоров </p>
            </li>
            <li className="whatcontains__item">
              <img className="whatcontains__image" src="./img/l3.png"/>
              <p className="whatcontains__title2 ht">Python</p>
              <p className="whatcontains__description"> Для специалистов в области машинного обучения.</p>
            </li>
            <li className="whatcontains__item">
              <img className="whatcontains__image" src="./img/l4.png"/>
              <p className="whatcontains__title2 ht">Java</p>
              <p className="whatcontains__description"> Для Android-разработчиков</p>
            </li>          
          </ul>
        </div>
    </section>
    <section className="join" id="join">
      <div className="join__title">Присоединиться</div>
      <div className="join__content">
        <div className="join__block">
          <div className="join__title2">
            На полгода
          </div>
          <ul className="join__desc">
            <li className="join__desc__item">
              100 разобранных задач
            </li>
            <li className="join__desc__item">
              Полноценный видео-разбор
            </li>
            <li className="join__desc__item">
              Курс на 4 языках программирования
            </li>
            <li className="join__desc__item">
              Сложность алгоритма и ресурсозатратность
            </li>
          </ul>
          <div className="join__lr">
            <div className="join__price">
              1 500₽
            </div>
            <div className="join__purchase">
              Приобрести
            </div>
          </div>
        </div>
        <div className="join__block">
          <div className="join__title2">
            На год
          </div>
          <ul className="join__desc">
            <li className="join__desc__item">
              100 разобранных задач
            </li>
            <li className="join__desc__item">
              Полноценный видео-разбор
            </li>
            <li className="join__desc__item">
              Курс на 4 языках программирования
            </li>
            <li className="join__desc__item">
              Сложность алгоритма и ресурсозатратность
            </li>
          </ul>
          <div className="join__lr">
            <div className="join__price">
              2 200₽
            </div>
            <div className="join__purchase">
              Приобрести
            </div>
          </div>


        </div>
      </div>
      <div className="join__alert">
           Курсы отличаются только длительностью доступа.
        </div>
    </section>
    <footer className="footer">
     <div className="footer__content"> © 2020 AlgoSpec</div>
    </footer>

  </div>
  </>
  );
}

export default Main;
