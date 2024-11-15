using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/contact")]

public class ContactController : ControllerBase
{
    [HttpPost]
    public IActionResult SubmitContactForm([FromBody] ContactFormModel model)
    {
        if(!ModelState.IsValid)
        {
            return BadRequest(new { error = "Dados Inválidos."});
        }
        ProcessContactForm(model);
        return Ok(new { message = "Mensagem enviada com sucesso!"});
    }
    private void ProcessContactForm(ContactFormModel model)
    {
        Console.WriteLine($"Menssagem de {model.Name}, {model.Email}, {model.Message}");
    }
}