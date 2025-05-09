﻿using System.Diagnostics;

namespace BookStore.Core.Models
{
    public class Books
    {
        public const int MAX_TITLE_LENGTH = 250;
        
        private Books(Guid id, string title, string description, decimal price)
        {
            Id = id;
            Title = title;
            Description = description;
            Price = price;
        }
        public Guid Id { get; }
        public string Title { get; } = string.Empty;
        public string Description { get; } = string.Empty;
        public decimal Price { get; }

        public static (Books Book, string Error) Create(Guid id, string title, string description, decimal price)
        {
            var error = string.Empty;

            if (string.IsNullOrEmpty(title) || title.Length > MAX_TITLE_LENGTH)
            {
                error = "Title can not be empty or longer then 250 symbols";
            }

            var book = new Books(id, title, description, price);

            return (book, error);
        }
    }
}
