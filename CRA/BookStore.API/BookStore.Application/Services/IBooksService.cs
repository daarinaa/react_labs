using BookStore.Core.Models;

namespace BookStore.Application.Services
{
    public interface IBooksService
    {
        Task<Guid> CreateBook(Books book);
        Task<Guid> DeleteBook(Guid id);
        Task<List<Books>> GetAllBooks();
        Task<Guid> UpdateBook(Guid id, string title, string description, decimal price);
    }
}
