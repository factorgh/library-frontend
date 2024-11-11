// UserCrudModal.js
import { Button, Modal, Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import FormInput from "../components/form-input";

const BASE_URL = "https://api.example.com/users"; // Replace with your actual API endpoint

const UserCrudModal = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const [users, setUsers] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

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
      //   const response = await axios.post(BASE_URL, data);
      setUsers((prevUsers) => [...prevUsers, data]);
      reset();
      closeModal();
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
      reset();
      closeModal();
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

  // Open the modal for Create or Update
  const openModal = (user = null) => {
    if (user) {
      setEditingId(user.id);
      setValue("name", user.name);
      setValue("email", user.email);
    } else {
      reset();
      setEditingId(null);
    }
    setIsModalVisible(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalVisible(false);
    reset();
    setEditingId(null);
  };

  // Handle form submission
  const onSubmit = (data) => {
    if (editingId) {
      updateUser(data);
    } else {
      addUser(data);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Table columns
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
          <Button type="link" onClick={() => openModal(user)}>
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
    <div className="w-full h-full items-center justify-center">
      <h1 className="text-xl font-bold">User CRUD with Modal and Table</h1>

      {/* Button to open the modal in Create mode */}
      <Button type="primary" onClick={() => openModal()} className="mb-4">
        Add New User
      </Button>

      {/* Ant Design Modal for Create / Update Form */}
      <Modal
        title={editingId ? "Update User" : "Add User"}
        open={isModalVisible}
        onCancel={closeModal}
        footer={null} // Form submission handled within the form
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            label="Name"
            name="name"
            placeholder="Enter your name"
            error={errors.name}
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
      </Modal>

      {/* Ant Design Table for displaying users */}
      <Table
        columns={columns}
        dataSource={users.map((user) => ({ ...user, key: user.id }))}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default UserCrudModal;
