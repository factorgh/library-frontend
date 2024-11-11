// UserCrud.js
import { Button, Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import FormInput from "./FormInput";

const BASE_URL = "https://api.example.com/users"; // Replace with your actual API endpoint

const UserCrud = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const [users, setUsers] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // Fetch all users (Read)
  const fetchUsers = async () => {
    try {
      const response = await axios.get(BASE_URL);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Add a new user (Create)
  const addUser = async (data) => {
    try {
      const response = await axios.post(BASE_URL, data);
      setUsers((prevUsers) => [...prevUsers, response.data]);
      reset(); // Clear the form after submission
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  // Update an existing user (Update)
  const updateUser = async (data) => {
    try {
      const response = await axios.put(`${BASE_URL}/${editingId}`, data);
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === editingId ? response.data : user))
      );
      setEditingId(null);
      reset(); // Clear the form after updating
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  // Delete a user (Delete)
  const deleteUser = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // Handle edit - populate form with selected user data
  const handleEdit = (user) => {
    setEditingId(user.id);
    setValue("name", user.name);
    setValue("email", user.email);
  };

  // Submit handler
  const onSubmit = (data) => {
    if (editingId) {
      updateUser(data); // Update user if editingId is set
    } else {
      addUser(data); // Otherwise, create a new user
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Define columns for Ant Design Table
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, user) => (
        <>
          <Button type="link" onClick={() => handleEdit(user)}>
            Edit
          </Button>
          <Button type="link" danger onClick={() => deleteUser(user.id)}>
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <div>
      <h1 className="text-xl font-bold">User CRUD</h1>

      {/* Form for Adding / Updating */}
      <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
        <FormInput
          label="Name"
          name="name"
          placeholder="Enter your name"
          error={errors.name} // Pass the error for validation
          {...register("name", { required: "Name is required" })}
        />
        <FormInput
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          error={errors.email}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
        />
        <Button type="primary" htmlType="submit" className="mt-4">
          {editingId ? "Update User" : "Add User"}
        </Button>
      </form>

      {/* Ant Design Table for displaying users */}
      <Table
        columns={columns}
        dataSource={users.map((user) => ({ ...user, key: user.id }))}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default UserCrud;
