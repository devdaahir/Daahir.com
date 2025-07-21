-- Create database
CREATE DATABASE SilanyoLibraryDB;
GO
USE SilanyoLibraryDB;
GO

-- Admins table for login
CREATE TABLE Admins (

    Username NVARCHAR(50) NOT NULL,
    Password NVARCHAR(50) NOT NULL
);
GO

-- Insert default admin user
INSERT INTO Admins (Username, Password) VALUES ('admin', '123');
GO
