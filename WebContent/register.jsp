<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<h1>Registration Form</h1>
    <form action="/CEProject/UserController" method="post">
        <table cellpadding="3pt">
            <tr>
                <td>First Name :</td>
                <td><input type="text" name="fname" size="30" /></td>
            </tr>
            <tr>
                <td>Last Name :</td>
                <td><input type="text" name="lname" size="30" /></td>
            </tr>

            <tr>
                <td>Avl :</td>
                <td><input type="text" name="avl" size="30" /></td>
            </tr>
            <tr>
                <td>Total :</td>
                <td><input type="text" name="total" size="30" /></td>
            </tr>
            <tr>
                <td>Unrealized :</td>
                <td><input type="text" name="unrealized" size="30" /></td>
            </tr>
            <tr>
                <td>Cash :</td>
                <td><input type="text" name="cash" size="30" /></td>
            </tr>
        </table>
        <p />
        <input type="submit" value="Register" />
    </form>
    </body>
</html>