using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Data;

[ApiController]
[Route("api/[controller]")]
public class LoginController : ControllerBase
{
    private readonly string _connectionString = "Server=localhost;Database=SilanyoLibraryDB;Trusted_Connection=True;";

    [HttpPost]
    public IActionResult Login([FromBody] LoginRequest request)
    {
        using (var conn = new SqlConnection(_connectionString))
        {
            conn.Open();
            var cmd = new SqlCommand("SELECT COUNT(*) FROM Admins WHERE Username=@u AND Password=@p", conn);
            cmd.Parameters.AddWithValue("@u", request.Username);
            cmd.Parameters.AddWithValue("@p", request.Password);
            int count = (int)cmd.ExecuteScalar();
            if (count > 0)
                return Ok(new { success = true });
            else
                return Unauthorized(new { success = false });
        }
    }
}

public class LoginRequest
{
    public string Username { get; set; }
    public string Password { get; set; }
}
