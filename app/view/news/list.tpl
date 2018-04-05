<html>
<head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/index.css" />
    <script type="text/javascript" src="/public/jquery-1.8.3.js" ></script>
</head>
<body>
<div class="news-view view">
    <button id="addUserBtn">新增用户</button>
    <table id="userList">
        <tr>
            <td width="200">姓名</td>
            <td width="100">年龄</td>
            <td width="300">邮箱</td>
            <td width="300">操作</td>
        </tr>
        {% for item in list %}
        <tr>
            <td>{{ item.name }}</td>
            <td>{{ item.age}}</td>
            <td>{{ item.mail}}</td>
            <td width="200">
                <a data-id="{{ item.id}}" class="edit-user">编辑</a>
                <a data-id="{{ item.id}}" class="delete-user">删除</a>
            </td>
        </tr>
        {% endfor %}
    </table>


    <form id="userForm">
        <ul>
            <li>
                <input type="hidden" id="userId"/>
                <label>姓名</label><input type="text" name="name" id="name" />
            </li>
            <li>
                <label>年龄</label><input type="text" name="age" id="age" />
            </li>
            <li>
                <label>邮箱</label><input type="text" name="mail" id="mail" />
            </li>
            <li>
                <button id="submitUser">提交</button>
            </li>
        </ul>
    </form>

</div>
<script type="text/javascript">
    $(function () {
        $('#submitUser').on('click', function () {
            var formData = {
                id: $('#userId').val(),
                name: $('#name').val(),
                age: $('#age').val(),
                mail: $('#mail').val(),
            }

            $.post('/user/create', formData, function (json) {
                console.log(json);
            });

            return false;
        });
    });

    $('#addUserBtn').on('click', function () {
        $('#userForm')[0].reset();
        $('#userId').val('');
    });

    // 编辑用户
    $('#userList').on('click', '.edit-user', function () {
        var id = $(this).attr('data-id');

        $.post('/user/getUserById', {id:id}, function (json) {
            var data = json.data;
            $('#userId').val(data.id);
            $('#name').val(data.name);
            $('#age').val(data.age);
            $('#mail').val(data.mail);
        });
    });

    // 删除用户
    $('#userList').on('click', '.delete-user', function () {
        var $this = $(this);
            id = $this.attr('data-id');

        $.post('/user/delete', {id:id}, function (json) {
            console.log('delete data =', json);
            $this.closest('tr').remove();
        });
    });


</script>
</body>
</html>