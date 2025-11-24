using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models;

[Table("Project")]
public class Project
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Column("name")]
    [Required]
    public string Name { get; set; } = string.Empty;

    [Column("status")]
    [Required]
    public string Status { get; set; } = string.Empty;

    [Column("description")]
    public string? Description { get; set; }

    [Column("due_date")]
    public DateOnly DueDate { get; set; }

    [Column("completed_date")]
    public DateOnly? CompletedDate { get; set; }

    [Column("building_id")]
    public int? BuildingId { get; set; }
}
