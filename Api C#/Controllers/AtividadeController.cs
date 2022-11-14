using Microsoft.AspNetCore.Mvc;
using projetoCsharp.Model;
using myProject.Repository;


namespace projetoCsharp.Controllers
{
   [ApiController]
   [Route("api/[controller]")]
   public class AtividadeController : ControllerBase
   {

      private readonly IAtividadeRepository _repository;

      public AtividadeController(IAtividadeRepository repository)
      {
         _repository = repository;
      }

      [HttpGet]
      public async Task<IActionResult> GetAll()
      {
         var atividades = await _repository.GetAtividades();
         return atividades.Any() ? Ok(atividades) : NoContent();
      }

      [HttpGet("{id}")]
      public async Task<IActionResult> GetById(int id)
      {
         var atividade = await _repository.GetAtividadeById(id);
         return atividade != null
         ? Ok(atividade) : NotFound("atividade não encontrado.");
      }

      [HttpPost]
      public async Task<IActionResult> Post(Atividade atividade)
      {
         _repository.AddAtividade(atividade);
         return await _repository.SaveChangesAsync()
         ? Ok("Adicionado") : BadRequest("Erro");
      }

      [HttpPut("{id}")]
      public async Task<IActionResult> Atualizar(int id, Atividade atividade)
      {
         var atividadeExiste = await _repository.GetAtividadeById(id);
         if (atividadeExiste == null) return NotFound("atividade não encontrado");

         atividadeExiste.Info = atividade.Info ?? atividadeExiste.Info;
         atividadeExiste.Nome = atividade.Nome ?? atividadeExiste.Nome;

         _repository.AtualizarAtividade(atividadeExiste);

         return await _repository.SaveChangesAsync()
         ? Ok("atualizado.") : BadRequest("Erro");
      }

      [HttpDelete("{id}")]
      public async Task<IActionResult> Delete(int id)
      {
         var atividadeExiste = await _repository.GetAtividadeById(id);
         if (atividadeExiste == null)
            return NotFound("não encontrado");

         _repository.DeletarAtividade(atividadeExiste);

         return await _repository.SaveChangesAsync()
         ? Ok("deletado.") : BadRequest("Erro");
      }

   }
}