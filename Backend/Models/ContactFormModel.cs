using System.ComponentModel.DataAnnotations;
public class ContactFormModel
{
    [Required]
    public string? Name{get; set;}

    [Required]
    [EmailAddress]
    public string? Email {get; set;}

    [Required]
    [MaxLength(600)]
    public string? Message {get; set;}
}