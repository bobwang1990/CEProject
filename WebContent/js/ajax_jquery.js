$(document).ready(function() {
        $('#login').click(function ()
        {
            $.ajax({
                type: "post",
                url: "test.jsp", //this is my servlet
                data: {
                    t1: $('#usr').val(), 
                    pass: $('#psw').val()
                },
                success: function(msg){      
                        $('#info').html(msg);
                }
            });
        });
        
        $('#login').click(function ()
                {
                    $.ajax({
                        type: "post",
                        url: "test1.jsp", //this is my servlet
                        data: {
                            t1: $('#usr').val(), 
                            pass: $('#psw').val()
                        },
                        success: function(msg){      
                                $('#avl').html(msg);
                        }
                    });
                });

        $('#login').click(function ()
                {
                    $.ajax({
                        type: "post",
                        url: "test2.jsp", //this is my servlet
                        data: {
                            t1: $('#usr').val(), 
                            pass: $('#psw').val()
                        },
                        success: function(msg){      
                                $('#total').html(msg);
                        }
                    });
                });
        
        $('#login').click(function ()
                {
                    $.ajax({
                        type: "post",
                        url: "test3.jsp", //this is my servlet
                        data: {
                            t1: $('#usr').val(), 
                            pass: $('#psw').val()
                        },
                        success: function(msg){      
                                $('#unr').html(msg);
                        }
                    });
                });
        
        $('#login').click(function ()
                {
                    $.ajax({
                        type: "post",
                        url: "test4.jsp", //this is my servlet
                        data: {
                            t1: $('#usr').val(), 
                            pass: $('#psw').val()
                        },
                        success: function(msg){      
                                $('#cash').html(msg);
                        }
                    });
                });
    });