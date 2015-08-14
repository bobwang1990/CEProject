package com.hibernate.dao;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
 
import com.hibernate.bean.User;
 
public class UserDao {
	//Dao Design Pattern stands for Data Access Object, it is an interface-based class
	//that handles all your CRUD operations with relational databases for a particular object.
    public void addUserDetails(String fname, String lname, String avl, String total,
            String unrealized, String cash) {
        try {
            // 1. configuring hibernate
            Configuration configuration = new Configuration().configure();
 
            // 2. create sessionfactory
            SessionFactory sessionFactory = configuration.buildSessionFactory();
 
            // 3. Get Session object
            Session session = sessionFactory.openSession();
 
            // 4. Starting Transaction
            Transaction transaction = session.beginTransaction();
            User user = new User();
            user.setFname(fname);
            user.setLname(lname);
            user.setAvl(avl);
            user.setTotal(total);
            user.setUnrealized(unrealized);
            user.setCash(cash);
            session.save(user);
            transaction.commit();
            System.out.println("\n\n Details Added \n");
 
        } catch (HibernateException e) {
            System.out.println(e.getMessage());
            System.out.println("error");
        }
 
    }
 
}
