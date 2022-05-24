
import './style_problems.css';
import { Component, useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function Problems() {
    const navigate = useNavigate();
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    const [loggedin, setLoggedin] = useState(false);
   useEffect(()=>{
     check();
   },[])
  function check(){
      const user = {
        username:localStorage.getItem("username"), password: localStorage.getItem("password")
      };
      console.log(localStorage.getItem("username"));
      if(localStorage.getItem("username") === null && localStorage.getItem("password") === null)
      {
        setLoggedin(false);
        return;
      }
      axios({
        method: 'post',
        url: 'http://malakhovkk.beget.tech/login.php',
        data: JSON.stringify(user)
      })
    //         axios.post(
    // 'http://malakhovkk.beget.tech/login.php',{body:user})
    .then(res => {
      if(res.data.message === 'logged in succefully')
      {
        setLoggedin(true); 
      }
      else
      {
        console.log(user)
        navigate("/login");
      }
    })
    }
    function logout()
    {
      localStorage.clear();
      check();
      forceUpdate();
    }
  return (
    <div className="wrapper">
    <header className="algospec">
      <div className="algospec__logo"><img className="algospec__img" src="img/logo.png"/></div>
      <ul className="navigation">
        <li className="navigation__item"><a href="/main">Что такое AlgoSpec?</a></li> 
        <li className="navigation__item"><a href="/problems">Содержание</a></li>
        <li className="navigation__item"><a href="/main">Покупка</a></li>
        <li className="navigation__item">
          {loggedin ? <a> {localStorage.getItem("username")}</a> : <><a href="/login">Войти</a><a style={{"marginLeft":"10px"}} href="/registration">Зарегистрироваться</a></>} 
          </li>
          <li className="navigation__item">{loggedin ? <a onClick={logout}> Выйти</a> : <a></a>}</li>
      </ul>
    </header>
 <section className="main">
  <div className="title">
      Задачи для подготовки к собеседованию
  </div>
  <div className="sort">
      <div className="sort__by">
          <div className="sort__by__caption">
              Сортировать по: 
          </div>
          <div className="sort__by__choice">
              <div className="sort__by__choice__category active">
                  категории
              </div>
              <div className="sort__by__choice__difficulty">
                  сложности
              </div>
          </div>
      </div>
  </div>
  <div className="problems">
      <div className="problem">
          <div className="problem__theme">
              <div className="binary_search_tree">
                  <img src="img/binary_search_tree.png"/>
              </div>
              Бинарные деревья поиска
          </div>
          <div className="problem__content closed">
              <div className="problem__content__star">
                  <img src="img/star_green.png"/>
              </div>
              <div className="problem__content__name">
                  Массивы
              </div>    
              {loggedin ? <button className="solve">Решить</button> :<></>}
          </div>
          <div className="problem__content closed">
              <div className="problem__content__star">
                  <img src="img/star_green.png"/>
              </div>
              <div className="problem__content__name">
                  Массивы
              </div>     
              {loggedin ? <button className="solve">Решить</button> :<></>}
          </div>

          <div className="problem__content closed">
              <div className="problem__content__star">
                  <img src="img/star_yellow.png"/>
              </div>
              <div className="problem__content__name">
                  Массивы
              </div>     
              {loggedin ? <button className="solve">Решить</button> :<></>}
          </div>
          <div className="problem__content closed">
              <div className="problem__content__star">
                  <img src="img/star_yellow.png"/>
              </div>
              <div className="problem__content__name">
                  Массивы
              </div>     
              {loggedin ? <button className="solve">Решить</button> :<></>}
          </div>

          <div className="problem__content closed">
              <div className="problem__content__star">
                  <img src="img/star_red.png"/>
              </div>
              <div className="problem__content__name">
                  Массивы
              </div>     
              {loggedin ? <button className="solve">Решить</button> :<></>}
          </div>
          <div className="problem__content closed">
              <div className="problem__content__star">
                  <img src="img/star_red.png"/>
              </div>
              <div className="problem__content__name">
                  Массивы
              </div>     
              {loggedin ? <button className="solve">Решить</button> :<></>}
          </div>

      </div>



          <div className="problem">
              <div className="problem__theme">
                  <div className="binary_tree">
                      <img src="img/binary_tree.png"/>
                  </div>
                  <div className="pink">Бинарные деревья </div>
              </div>
              <div className="problem__content closed">
                  <div className="problem__content__star">
                      <img src="img/star_green.png"/>
                  </div>
                  <div className="problem__content__name">
                      Массивы
                  </div>   
                  {loggedin ? <button className="solve">Решить</button> :<></>}  
              </div>
              <div className="problem__content closed">
                  <div className="problem__content__star">
                      <img src="img/star_green.png"/>
                  </div>
                  <div className="problem__content__name">
                      Массивы
                  </div>     
                  {loggedin ? <button className="solve">Решить</button> :<></>}
              </div>
  
              <div className="problem__content closed">
                  <div className="problem__content__star">
                      <img src="img/star_yellow.png"/>
                  </div>
                  <div className="problem__content__name">
                      Массивы
                  </div>     
                  {loggedin ? <button className="solve">Решить</button> :<></>}
              </div>
              <div className="problem__content closed">
                  <div className="problem__content__star">
                      <img src="img/star_yellow.png"/>
                  </div>
                  <div className="problem__content__name">
                      Массивы
                  </div>    
                  {loggedin ? <button className="solve">Решить</button> :<></>} 
              </div>
  
              <div className="problem__content closed">
                  <div className="problem__content__star">
                      <img src="img/star_red.png"/>
                  </div>
                  <div className="problem__content__name">
                      Массивы
                  </div>   
                  {loggedin ? <button className="solve">Решить</button> :<></>} 
              </div>
              <div className="problem__content closed">
                  <div className="problem__content__star">
                      <img src="img/star_red.png"/>
                  </div>
                  <div className="problem__content__name">
                      Массивы
                  </div>   
                  {loggedin ? <button className="solve">Решить</button> :<></>}  
              </div>
      </div>



      <div className="problem">
          <div className="problem__theme">
              <div className="stack">
                  <img src="img/stack.png"/>
              </div>
              <div className="orange">Стек</div>
          </div>
          <div className="problem__content closed">
              <div className="problem__content__star">
                  <img src="img/star_green.png"/>
              </div>
              <div className="problem__content__name">
                  Массивы
              </div>    
              {loggedin ? <button className="solve">Решить</button> :<></>} 
          </div>
          <div className="problem__content closed">
              <div className="problem__content__star">
                  <img src="img/star_green.png"/>
              </div>
              <div className="problem__content__name">
                  Массивы
              </div>   
              {loggedin ? <button className="solve">Решить</button> :<></>} 
          </div>

          <div className="problem__content closed">
              <div className="problem__content__star">
                  <img src="img/star_yellow.png"/>
              </div>
              <div className="problem__content__name">
                  Массивы
              </div>   
              {loggedin ? <button className="solve">Решить</button> :<></>}  
          </div>
          <div className="problem__content closed">
              <div className="problem__content__star">
                  <img src="img/star_yellow.png"/>
              </div>
              <div className="problem__content__name">
                  Массивы
              </div>
              {loggedin ? <button className="solve">Решить</button> :<></>}     
          </div>

          <div className="problem__content closed">
              <div className="problem__content__star">
                  <img src="img/star_red.png"/>
              </div>
              <div className="problem__content__name">
                  Массивы
              </div> 
              {loggedin ? <button className="solve">Решить</button> :<></>}    
          </div>
          <div className="problem__content closed">
              <div className="problem__content__star">
                  <img src="img/star_red.png"/>
              </div>
              <div className="problem__content__name">
                  Массивы
              </div> 
              {loggedin ? <button className="solve">Решить</button> :<></>}    
          </div>
  </div>


  <div className="problem">
      <div className="problem__theme">
          <div className="heap">
              <img src="img/heap.png"/>
          </div>
          <div className="green">Куча</div>
      </div>
      <div className="problem__content closed">
          <div className="problem__content__star">
              <img src="img/star_green.png"/>
          </div>
          <div className="problem__content__name">
              Массивы
          </div>     
          {loggedin ? <button className="solve">Решить</button> :<></>}
      </div>
      <div className="problem__content closed">
          <div className="problem__content__star">
              <img src="img/star_green.png"/>
          </div>
          <div className="problem__content__name">
              Массивы
          </div> 
          {loggedin ? <button className="solve">Решить</button> :<></>}   
      </div>

      <div className="problem__content closed">
          <div className="problem__content__star">
              <img src="img/star_yellow.png"/>
          </div>
          <div className="problem__content__name">
              Массивы
          </div>     
          {loggedin ? <button className="solve">Решить</button> :<></>}
      </div>
      <div className="problem__content closed">
          <div className="problem__content__star">
              <img src="img/star_yellow.png"/>
          </div>
          <div className="problem__content__name">
              Массивы
          </div>     
          {loggedin ? <button className="solve">Решить</button> :<></>}
      </div>

      <div className="problem__content closed">
          <div className="problem__content__star">
              <img src="img/star_red.png"/>
          </div>
          <div className="problem__content__name">
              Массивы
          </div>  
          {loggedin ? <button className="solve">Решить</button> :<></>}   
      </div>
      <div className="problem__content closed">
          <div className="problem__content__star">
              <img src="img/star_red.png"/>
          </div>
          <div className="problem__content__name">
              Массивы
          </div>  
          {loggedin ? <button className="solve">Решить</button> :<></>}   
      </div>
</div>
<div className="problem">
  <div className="problem__theme">
      <div className="recur">
          <img src="img/recur.png"/>
      </div>
      <div className="blue">Рекурсия</div>
  </div>
  <div className="problem__content closed">
      <div className="problem__content__star">
          <img src="img/star_green.png"/>
      </div>
      <div className="problem__content__name">
          Массивы
      </div>     
      {loggedin ? <button className="solve">Решить</button> :<></>}
  </div>
  <div className="problem__content closed">
      <div className="problem__content__star">
          <img src="img/star_green.png"/>
      </div>
      <div className="problem__content__name">
          Массивы
      </div>   
      {loggedin ? <button className="solve">Решить</button> :<></>}  
  </div>

  <div className="problem__content closed">
      <div className="problem__content__star">
          <img src="img/star_yellow.png"/>
      </div>
      <div className="problem__content__name">
          Массивы
      </div>  
      {loggedin ? <button className="solve">Решить</button> :<></>}   
  </div>
  <div className="problem__content closed">
      <div className="problem__content__star">
          <img src="img/star_yellow.png"/>
      </div>
      <div className="problem__content__name">
          Массивы
      </div>     
      {loggedin ? <button className="solve">Решить</button> :<></>}
  </div>

  <div className="problem__content closed">
      <div className="problem__content__star">
          <img src="img/star_red.png"/>
      </div>
      <div className="problem__content__name">
          Массивы
      </div>     
      {loggedin ? <button className="solve">Решить</button> :<></>}
  </div>
  <div className="problem__content closed">
      <div className="problem__content__star">
          <img src="img/star_red.png"/>
      </div>
      <div className="problem__content__name">
          Массивы
      </div>  
      {loggedin ? <button className="solve">Решить</button> :<></>}   
  </div>
</div>
<div className="problem">
  <div className="problem__theme">
      <div className="recur">
          <img src="img/sort.png"/>
      </div>
      <div className="yellow">Сортировка</div>
  </div>
  <div className="problem__content closed">
      <div className="problem__content__star">
          <img src="img/star_green.png"/>
      </div>
      <div className="problem__content__name">
          Массивы
      </div>     
      {loggedin ? <button className="solve">Решить</button> :<></>}
  </div>
  <div className="problem__content closed">
      <div className="problem__content__star">
          <img src="img/star_green.png"/>
      </div>
      <div className="problem__content__name">
          Массивы
      </div>     
      {loggedin ? <button className="solve">Решить</button> :<></>}
  </div>

  <div className="problem__content closed">
      <div className="problem__content__star">
          <img src="img/star_yellow.png"/>
      </div>
      <div className="problem__content__name">
          Массивы
      </div>    
      {loggedin ? <button className="solve">Решить</button> :<></>} 
  </div>
  <div className="problem__content closed">
      <div className="problem__content__star">
          <img src="img/star_yellow.png"/>
      </div>
      <div className="problem__content__name">
          Массивы
      </div>    
      {loggedin ? <button className="solve">Решить</button> :<></>} 
  </div>

  <div className="problem__content closed">
      <div className="problem__content__star">
          <img src="img/star_red.png"/>
      </div>
      <div className="problem__content__name">
          Массивы
      </div>     
      {loggedin ? <button className="solve">Решить</button> :<></>}
  </div>
  <div className="problem__content closed">
      <div className="problem__content__star">
          <img src="img/star_red.png"/>
      </div>
      <div className="problem__content__name">
          Массивы
      </div>    
      {loggedin ? <button className="solve">Решить</button> :<></>} 
  </div>
</div>

  </div>
 </section>
  <footer className="footer">
      <div className="footer__content"> © 2022 AlgoSpec</div>
  </footer>

  </div>
  );
}

export default Problems;
