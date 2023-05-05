export function WrapperFull({
  children,
  className = "",
  id = "",
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      className={`w-full grid items-center mx-auto ${className}`}
      id={`${id}`}
    >
      {children}
    </section>
  );
}

export function WrapperLarge({
  children,
  className = "",
  style = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  style?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`
      w-full max-w-screen-2xl grid px-4 md:px-20 2xl:px-14 py-8 md:py-14 mx-auto ${className}`}
    >
      {children}
    </section>
  );
}
