import { Grid, Card, Text, Title, Group, Stack, Badge, SimpleGrid, Paper, ActionIcon, Avatar, Table, Container, ThemeIcon, Center, Timeline, Notification } from "@mantine/core";
import { IconUsers, IconStethoscope, IconCalendarTime, IconActivity, IconUserCheck, IconClock, IconAlertTriangle, IconArrowRight, IconEye, IconEdit, IconBed, IconPill, IconReportMedical, IconAmbulance } from "@tabler/icons-react";

export const Dashboard = () => {
  // Mock data for Private Practice dashboard
  const medicalStats = [
    {
      title: "Total Patients",
      value: "2,847",
      change: "+8.2%",
      positive: true,
      icon: IconUsers,
      color: "blue",
      description: "Active patients",
    },
    {
      title: "Today's Appointments",
      value: "47",
      change: "+12%",
      positive: true,
      icon: IconCalendarTime,
      color: "green",
      description: "Scheduled for today",
    },
    {
      title: "Available Beds",
      value: "23/45",
      change: "-5 beds",
      positive: false,
      icon: IconBed,
      color: "orange",
      description: "Current availability",
    },
    {
      title: "Emergency Cases",
      value: "8",
      change: "+3",
      positive: false,
      icon: IconAmbulance,
      color: "red",
      description: "Active emergencies",
    },
  ];

  const recentAppointments = [
    {
      id: "APT001",
      patient: "Sarah Johnson",
      doctor: "Dr. Smith",
      time: "09:30 AM",
      type: "Cardiology",
      status: "Confirmed",
      avatar: "SJ",
    },
    {
      id: "APT002",
      patient: "Mike Davis",
      doctor: "Dr. Wilson",
      time: "10:15 AM",
      type: "General",
      status: "In Progress",
      avatar: "MD",
    },
    {
      id: "APT003",
      patient: "Emma Brown",
      doctor: "Dr. Johnson",
      time: "11:00 AM",
      type: "Pediatrics",
      status: "Waiting",
      avatar: "EB",
    },
    {
      id: "APT004",
      patient: "John Wilson",
      doctor: "Dr. Lee",
      time: "11:30 AM",
      type: "Orthopedics",
      status: "Completed",
      avatar: "JW",
    },
  ];

  const criticalAlerts = [
    {
      type: "critical",
      message: "Patient in Room 204 requires immediate attention",
      time: "2 min ago",
      icon: IconAlertTriangle,
    },
    {
      type: "warning",
      message: "Low inventory: Insulin supplies running low",
      time: "15 min ago",
      icon: IconPill,
    },
    {
      type: "info",
      message: "Dr. Anderson will be 30 minutes late",
      time: "1 hour ago",
      icon: IconClock,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Confirmed":
        return "green";
      case "In Progress":
        return "blue";
      case "Waiting":
        return "yellow";
      case "Completed":
        return "gray";
      default:
        return "gray";
    }
  };

  const getAlertColor = (type: string) => {
    switch (type) {
      case "critical":
        return "red";
      case "warning":
        return "yellow";
      case "info":
        return "blue";
      default:
        return "gray";
    }
  };

  return (
    <Container fluid className="p-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Stack gap="xl">
        {/* Header */}
        <div className="mb-6">
          <Title order={1} className="text-gray-800 dark:text-white mb-2">
            Private Practice Dashboard
          </Title>
          <Text c="dimmed" size="lg" className="dark:text-gray-300">
            Real-time overview of your Private Practice operations and patient care.
          </Text>
        </div>

        {/* Statistics Cards */}
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
          {medicalStats.map((stat) => (
            <Card
              key={stat.title}
              shadow="sm"
              padding="lg"
              radius="md"
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              <Group justify="space-between" mb="xs">
                <ThemeIcon
                  size="xl"
                  radius="md"
                  variant="light"
                  color={stat.color}
                  className="dark:bg-opacity-20"
                >
                  <stat.icon size={24} />
                </ThemeIcon>
                <Badge
                  color={stat.positive ? "green" : "red"}
                  variant="light"
                  size="sm"
                  className="dark:bg-opacity-20"
                >
                  {stat.change}
                </Badge>
              </Group>
              <Text size="xl" fw={700} className="text-gray-800 dark:text-white">
                {stat.value}
              </Text>
              <Text size="sm" c="dimmed" className="dark:text-gray-400">
                {stat.title}
              </Text>
              <Text size="xs" c="dimmed" mt={4} className="dark:text-gray-500">
                {stat.description}
              </Text>
            </Card>
          ))}
        </SimpleGrid>

        {/* Main Content Grid */}
        <Grid gutter="lg">
          {/* Today's Appointments */}
          <Grid.Col span={{ base: 12, lg: 8 }}>
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            >
              <Group justify="space-between" mb="md">
                <Title order={3} className="text-gray-800 dark:text-white">
                  Today's Appointments
                </Title>
                <ActionIcon
                  variant="light"
                  color="blue"
                  className="hover:bg-blue-50 dark:hover:bg-blue-900"
                >
                  <IconArrowRight size={16} />
                </ActionIcon>
              </Group>

              <Table striped highlightOnHover className="dark:text-gray-300">
                <Table.Thead>
                  <Table.Tr className="dark:border-gray-600">
                    <Table.Th className="dark:text-gray-300">Patient</Table.Th>
                    <Table.Th className="dark:text-gray-300">Doctor</Table.Th>
                    <Table.Th className="dark:text-gray-300">Time</Table.Th>
                    <Table.Th className="dark:text-gray-300">Department</Table.Th>
                    <Table.Th className="dark:text-gray-300">Status</Table.Th>
                    <Table.Th className="dark:text-gray-300">Actions</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {recentAppointments.map((appointment) => (
                    <Table.Tr key={appointment.id} className="dark:border-gray-700">
                      <Table.Td>
                        <Group gap="sm">
                          <Avatar color="blue" radius="xl" size="sm">
                            {appointment.avatar}
                          </Avatar>
                          <Text className="dark:text-gray-300">{appointment.patient}</Text>
                        </Group>
                      </Table.Td>
                      <Table.Td className="dark:text-gray-300">{appointment.doctor}</Table.Td>
                      <Table.Td className="dark:text-gray-300 font-medium">
                        {appointment.time}
                      </Table.Td>
                      <Table.Td className="dark:text-gray-300">{appointment.type}</Table.Td>
                      <Table.Td>
                        <Badge
                          color={getStatusColor(appointment.status)}
                          variant="light"
                          size="sm"
                          className="dark:bg-opacity-20"
                        >
                          {appointment.status}
                        </Badge>
                      </Table.Td>
                      <Table.Td>
                        <Group gap="xs">
                          <ActionIcon
                            variant="subtle"
                            color="blue"
                            size="sm"
                            className="hover:bg-blue-50 dark:hover:bg-blue-900"
                          >
                            <IconEye size={14} />
                          </ActionIcon>
                          <ActionIcon
                            variant="subtle"
                            color="green"
                            size="sm"
                            className="hover:bg-green-50 dark:hover:bg-green-900"
                          >
                            <IconEdit size={14} />
                          </ActionIcon>
                        </Group>
                      </Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
            </Card>
          </Grid.Col>

          {/* Sidebar Content */}
          <Grid.Col span={{ base: 12, lg: 4 }}>
            <Stack gap="lg">
              {/* Critical Alerts */}
              <Card
                shadow="sm"
                padding="lg"
                radius="md"
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              >
                <Group justify="space-between" mb="md">
                  <Title order={4} className="text-gray-800 dark:text-white">
                    Critical Alerts
                  </Title>
                  <ThemeIcon color="red" variant="light" size="sm">
                    <IconAlertTriangle size={16} />
                  </ThemeIcon>
                </Group>

                <Stack gap="sm">
                  {criticalAlerts.map((alert, index) => (
                    <Notification
                      key={index}
                      icon={<alert.icon size={16} />}
                      color={getAlertColor(alert.type)}
                      title={alert.message}
                      onClose={() => { }}
                      className="dark:bg-gray-700 dark:border-gray-600"
                    >
                      <Text size="xs" c="dimmed" className="dark:text-gray-400">
                        {alert.time}
                      </Text>
                    </Notification>
                  ))}
                </Stack>
              </Card>

            </Stack>
          </Grid.Col>
        </Grid>

        {/* Additional Medical Metrics */}
        <Grid gutter="lg">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            >
              <Group justify="space-between" mb="md">
                <Title order={4} className="text-gray-800 dark:text-white">
                  Recent Activity
                </Title>
                <ThemeIcon color="blue" variant="light" size="sm">
                  <IconActivity size={16} />
                </ThemeIcon>
              </Group>

              <Timeline bulletSize={20} lineWidth={2}>
                <Timeline.Item
                  bullet={<IconUserCheck size={12} />}
                  title="Patient admitted to Room 305"
                  color="green"
                >
                  <Text c="dimmed" size="sm" className="dark:text-gray-400">
                    John Doe checked in for cardiac monitoring
                  </Text>
                  <Text size="xs" mt={4} className="dark:text-gray-500">
                    15 minutes ago
                  </Text>
                </Timeline.Item>

                <Timeline.Item
                  bullet={<IconPill size={12} />}
                  title="Medication administered"
                  color="blue"
                >
                  <Text c="dimmed" size="sm" className="dark:text-gray-400">
                    Pain medication given to patient in Room 201
                  </Text>
                  <Text size="xs" mt={4} className="dark:text-gray-500">
                    30 minutes ago
                  </Text>
                </Timeline.Item>

                <Timeline.Item
                  bullet={<IconReportMedical size={12} />}
                  title="Lab results ready"
                  color="yellow"
                >
                  <Text c="dimmed" size="sm" className="dark:text-gray-400">
                    Blood work completed for Sarah Johnson
                  </Text>
                  <Text size="xs" mt={4} className="dark:text-gray-500">
                    1 hour ago
                  </Text>
                </Timeline.Item>
              </Timeline>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            >
              <Group justify="space-between" mb="md">
                <Title order={4} className="text-gray-800 dark:text-white">
                  Quick Actions
                </Title>
                <ThemeIcon color="purple" variant="light" size="sm">
                  <IconStethoscope size={16} />
                </ThemeIcon>
              </Group>

              <SimpleGrid cols={2} spacing="md">
                <Paper
                  p="md"
                  radius="md"
                  className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                >
                  <Center>
                    <Stack align="center" gap="xs">
                      <ThemeIcon color="blue" variant="light" size="lg">
                        <IconUsers size={20} />
                      </ThemeIcon>
                      <Text size="sm" fw={500} className="text-blue-700 dark:text-blue-300">
                        Add Patient
                      </Text>
                    </Stack>
                  </Center>
                </Paper>

                <Paper
                  p="md"
                  radius="md"
                  className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 cursor-pointer hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                >
                  <Center>
                    <Stack align="center" gap="xs">
                      <ThemeIcon color="green" variant="light" size="lg">
                        <IconCalendarTime size={20} />
                      </ThemeIcon>
                      <Text size="sm" fw={500} className="text-green-700 dark:text-green-300">
                        Schedule
                      </Text>
                    </Stack>
                  </Center>
                </Paper>

                <Paper
                  p="md"
                  radius="md"
                  className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 cursor-pointer hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors"
                >
                  <Center>
                    <Stack align="center" gap="xs">
                      <ThemeIcon color="orange" variant="light" size="lg">
                        <IconReportMedical size={20} />
                      </ThemeIcon>
                      <Text size="sm" fw={500} className="text-orange-700 dark:text-orange-300">
                        Lab Results
                      </Text>
                    </Stack>
                  </Center>
                </Paper>

                <Paper
                  p="md"
                  radius="md"
                  className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 cursor-pointer hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
                >
                  <Center>
                    <Stack align="center" gap="xs">
                      <ThemeIcon color="purple" variant="light" size="lg">
                        <IconAmbulance size={20} />
                      </ThemeIcon>
                      <Text size="sm" fw={500} className="text-purple-700 dark:text-purple-300">
                        Emergency
                      </Text>
                    </Stack>
                  </Center>
                </Paper>
              </SimpleGrid>
            </Card>
          </Grid.Col>
        </Grid>
      </Stack>
    </Container>
  );
};
