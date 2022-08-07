// TODO: 使用者可以新增待辦事項
const addNewTodo = () =>{
    // 檢查 input 有沒有值
  const value = $('#todo').val()
  // 取得使用者填寫的值
  console.log(value)
  if (!value) {
    alert('請填寫資料')
    return
  }
      
  // 插入資料
  //先找父親
  $('.todolist__item').append(`<li class="no-completed">
    <input class="todolist__input" type="checkbox" />
    <span>${value}</span>
    <a class="delete" href="#">
      <i class="fa fa-x"></i>
    </a>
  </li>`)

  // 清空Input
  $('#todo').val('')
  
}

// 更新已完成項目
const updateCompletedCount = () => {
  const count = $('.todolist__item').find('.completed').length

  $('.todolist__info').find('a').text(count)
}

// TODO: 使用者可以刪除待辦事項
const deleteTodo = (event) => {
  console.log(event,1234)
  //因為要找到子元素才能往上找那一條的li
  $(event.target).parent().closest('li').remove()
}

// TODO: 清除已完成項目
const clearCompletedTodo = () => {
  // 找到 completed 的待辦事項，並移除 .completed class


  // 更新已完成項目
  // 抓出 .todolist__item 待辦事項的 .completed class 數量
  // 用 jQuery text() 方式更新 html 已完成 [數字] 項目
}


// 監聽(匿名函式)
$(() => {
  // TODO: 每一條代辦事項 delete 監聽 click 事件
  //找到父元素才能delete，父元素-點擊-delete動作-呼叫函式
  $('.todolist__item').on('click', '.delete', (event) => deleteTodo(event))

  // 狀態：全部、待完成、已完成
  $('.todolist__tabs li').each(function () {
    $(this).click(function () {
      $(this).siblings().find('a').removeClass('active')
      $(this).find('a').addClass('active')
    })
  })

  // TODO: 使用者可以將待辦事項設定成已完成
  // 步驟一：監聽每一個 todo list，前面 checkbox 有被點擊時執行 Function
  $('.todolist__item li').on('click', 'input', (event) => {
    // 步驟二：每條待辦事項根據條件，加上不同的 class：completed, no-complete
    const li = $(event.target).parent()
    if (li.hasClass('completed')) {
      li.removeClass('completed')
      li.addClass('no-completed')
    } else {
      li.removeClass('no-completed')
      li.addClass('completed')
    }
    // 步驟三：更新已完成項目的數字
    // 更新已完成項目
    const count = $('.todolist__item').find('.completed').length
    $('.todolist__info').find('a').text(count)
  })

  // 篩選全部
  $('.todolist__tabs').on('click', '.all', () => {
    $('.todolist__item').children().show()
  })

  // 篩選待完成
  $('.todolist__tabs').on('click', '.no-completed', () => {
    $('.todolist__item').find('.completed').hide()
    $('.todolist__item').find('.no-completed').show()
  })

  // 篩選已完成
  $('.todolist__tabs').on('click', '.completed', () => {
    $('.todolist__item').find('.completed').show()
    $('.todolist__item').find('.no-completed').hide()
  })
})