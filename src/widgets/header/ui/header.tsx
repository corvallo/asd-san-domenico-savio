import * as stylex from "@stylexjs/stylex";
import { Button } from "~/shared/ui/button";
import { styles } from "./header.style";
import { NavLink } from "~/features/nav-link";
import { Navigation } from "~/features/navigation";
import { Logo } from "~/features/logo";

export function Header() {
  return (
    <header {...stylex.props(styles.bar)}>
      <Logo />
      <Navigation>
        <NavLink active={true}>prova</NavLink>
        <NavLink>DIOCANE</NavLink>
      </Navigation>

      <div {...stylex.props(styles.enroll)}>
        <Button size='lg' disabled title='Iscrizioni non ancora disponibili'>
          Iscriviti ai corsi
        </Button>
      </div>
    </header>
  );
}
