package com.hibernate.bean;

public class User {
	private int id;
	private String fname;
	private String lname;
	private String avl;
	private String total;
	private String unrealized;
	private String cash;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getAvl() {
		return avl;
	}

	public void setAvl(String avl) {
		this.avl = avl;
	}

	public String getTotal() {
		return total;
	}

	public void setTotal(String total) {
		this.total = total;
	}

	public String getUnrealized() {
		return unrealized;
	}

	public void setUnrealized(String unrealized) {
		this.unrealized = unrealized;
	}

	public String getCash() {
		return cash;
	}

	public void setCash(String cash) {
		this.cash = cash;
	}

}
