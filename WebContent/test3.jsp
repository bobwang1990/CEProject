<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<%@ page import ="java.sql.*" %>
<% String username = request.getParameter("t1");
String psw = request.getParameter("pass");
Class.forName("com.mysql.jdbc.Driver");
Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/test",
        "root", "toor");
Statement st = con.createStatement();
ResultSet rs;
rs = st.executeQuery("select * from ce_copy where fname='" + username + "' and lname='" + psw + "'");
if (rs.next()) {
    
    out.println(rs.getString(6));
} else {
    out.println("");
}
%> 
</body>
</html>