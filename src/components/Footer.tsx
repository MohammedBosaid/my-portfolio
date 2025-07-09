export const Footer = () => {
  return (
    <footer className="py-8 border-t bg-muted/50">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Mohammed Bosaid. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

