import { Exercise as ExerciseModel } from '../models/exercise';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Heading,
  AspectRatio,
} from '@chakra-ui/react';
import convertYoutubeLink from '../utils/youtubeLinkConverter';

interface ExerciseProps {
  exercise: ExerciseModel;
}

const Exercise = ({ exercise }: ExerciseProps) => {
  return (
    <Card maxW={600}>
      <CardHeader>
        <Heading size="lg">{exercise.title}</Heading>
      </CardHeader>
      <CardBody>
        <Text mb={4}>{exercise.description}</Text>
        <AspectRatio ratio={16 / 9}>
          <iframe
            width="560"
            height="315"
            src={convertYoutubeLink(exercise.videoUrl)}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
        </AspectRatio>
      </CardBody>
    </Card>
  );
};

export default Exercise;
