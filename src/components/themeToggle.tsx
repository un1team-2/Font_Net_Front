import { useMantineColorScheme, ActionIcon, Group } from '@mantine/core';
import { Sun, MoonStars } from 'tabler-icons-react';

export default function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group position="center" my="xl">
      <ActionIcon
        onClick={() => toggleColorScheme()}
        size="lg"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
        })}
      >
        {colorScheme === 'dark' ? <Sun size="1.2rem" /> : <MoonStars size="1.2rem" />}
      </ActionIcon>
    </Group>
  );
}