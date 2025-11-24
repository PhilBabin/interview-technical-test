using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProjectsController(AppDbContext context) : ControllerBase
{
    private readonly AppDbContext _context = context;

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Project>>> GetProjects()
    {
        return await _context.Projects.ToListAsync();
    }
}
